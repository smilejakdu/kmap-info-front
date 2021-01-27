import React, { Component } from 'react';
import XLSX from 'xlsx';
import {
    SheetListHeader,
    SheetListBody,
    SheetListBox,
    SheetListItem,
    Button,
    FileUploadPageHeader,
    FileUploadPageBodyMiddle,
    FileUploadPageBodyFooter,
} from './ExcelForm.style';
import request from '../../util/request';
import SheetTable from '../SheetTable/SheetTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchDataContainer from '../../containers/SearchDataContainer';
import Modal from '../Modal/Modal';

const ExcelRenderer = (file, callback, index = 0) => {
    // Promise 공식 문서 확인 
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

        reader.onload = function (e) {
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, {
                type: rABS ? 'binary' : 'array',
            });
            const sheetArr = [];
            const len = wb.SheetNames.length;

            for (let i = 0; i < len; i++) {
                sheetArr.push(wb.SheetNames[i]);
            }

            const wsname = wb.SheetNames[index];
            const ws = wb.Sheets[wsname];

            const json = XLSX.utils.sheet_to_json(ws, { header: 1 });
            const jsonData = [];

            for (let i = 1; i < json.length; i++) {
                jsonData.push(json[i]);
            }

            const cols = make_cols(json[0]);
            const data = {
                rows: jsonData,
                cols: cols,
                sheetArr: sheetArr,
            };

            resolve(data);
            return callback(null, data);
        };
        if (file && rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);
    });
};

// 칼럼 리스트 
const make_cols = (refstr) => {
    refstr.unshift('id');
    const o = [];
    for (var i = 0; i < refstr.length; ++i) {
        o[i] = {
            name: refstr[i],
            key: i,
        };
    }
    return o;
};

class ExcelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dataLoaded: false,
            isFormInvalid: false,
            uploadName: [],
            rows: null,
            cols: null,
            fileObj: null,
            excelFileName: '',
            sheetName: '',
            modalshow: false,
            modalmessage: '',
        };

        this.fileSearching = this.fileSearching.bind(this);
        this.toggle = this.toggle.bind(this);
        this.openFileBrowser = this.openFileBrowser.bind(this);
        this.renderFile = this.renderFile.bind(this);
        this.fileInput = React.createRef();
    }
    // 모달창 함수
    ModalShowOpen = () => {
        this.setState({ modalshow: true });
    };

    ModalShowClose = () => {
        this.setState({ modalshow: false });
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //  return true!; 구현하지 않을때는 기본적으로 true 입니다.
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    // 파일 업로드 파일 탐색기 open
    openFileBrowser = () => {
        this.fileInput.current.click();
    };

    // 파일 탐색기 에서 탐색버튼 을 누르게 됬을때 실행하는 함수
    fileSearching = (event) => {
        if (event.target.files.length) {
            let fileObj = event.target.files[0];
            let fileName = fileObj.name;

            if (fileName.slice(fileName.lastIndexOf('.') + 1) === 'xlsx') {
                this.setState({
                    excelFileName: fileName,
                    isFormInvalid: false,
                    fileObj: fileObj,
                });
                this.renderFile(fileObj);
            } else {
                this.setState({ isFormInvalid: true, excelFileName: '' });
            }
        }
    };

    renderFile = (fileObj, index = 0) => {
        ExcelRenderer(
            fileObj,
            (err, resp) => {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({
                        dataLoaded: true,
                        cols: resp.cols,
                        rows: resp.rows,
                        uploadName: resp.sheetArr,
                        excelFileName: fileObj.name,
                    });
                }
            },
            index,
        );
    };

    // sheet list 중에 하나를 클릭했을때 작동하는 함수
    sheetDataClick = (index) => {
        this.setState({
            sheetName: this.state.uploadName[index],
        });
        this.renderFile(this.state.fileObj, index);
    };

    // 업로드 버튼 클릭시 실행하는 함수
    uploadClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.fileObj);
        formData.entries();

        try {
            await request.post('/excel/upload', formData);
            this.setState({
                isOpen: false,
                dataLoaded: false,
                isFormInvalid: false,
                uploadName: [],
                rows: null,
                cols: null,
                fileObj: null,
                excelFileName: '',
            });
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                if (data.message === 'EXISTS_EXCEL') {
                    this.setState({
                        modalshow: true,
                        modalmessage: '파일이름이 존재합니다.',
                    });
                } else if (data.message === 'NOT_EXCEL_FILE') {
                    this.setState({
                        modalshow: true,
                        modalmessage: '원하는 엑셀 파일이 아닙니다.',
                    });
                } else if (data.message === 'INVALID_KEY') {
                    this.setState({
                        modalshow: true,
                        modalmessage: '칼럼 값을 확인하세요.',
                    });
                } else if (data.message === 'DOES_NOT_FILE') {
                    this.setState({
                        modalshow: true,
                        modalmessage: '파일이 존재하지 않습니다.',
                    });
                }
            }
        }
    };

    render() {
        return (
            <div>
                <FileUploadPageHeader>
                    {this.state.modalshow && (
                        <Modal isOpen={this.ModalShowOpen} close={this.ModalShowClose} text={this.state.modalmessage}></Modal>
                    )}
                    <form>
                        <SheetListBox>
                            <SheetListHeader>Sheet List</SheetListHeader>
                            <SheetListBody>
                                {this.state.uploadName.map((sheet, i) => (
                                    <SheetListItem key={i} onClick={() => this.sheetDataClick(i)}>
                                        {sheet}
                                    </SheetListItem>
                                ))}
                            </SheetListBody>
                        </SheetListBox>
                        <p className="ms-office-excel">MS Office Excel 파일 (xlsx) 만 가능합니다.</p>
                        <SearchDataContainer />
                        <input
                            type="file"
                            hidden="hidden"
                            onChange={this.fileSearching.bind(this)}
                            ref={this.fileInput}
                            onClick={(event) => {
                                event.target.value = null;
                            }}
                            style={{
                                padding: '10px',
                            }}
                        />
                    </form>

                    <Button onClick={this.openFileBrowser.bind(this)}>파일찾기</Button>
                    <Button type="submit" onClick={this.uploadClick}>
                        업로드
                    </Button>
                </FileUploadPageHeader>
                <FileUploadPageBodyMiddle>
                    {this.state.excelFileName ? (
                        <div className="excelname">{this.state.excelFileName}</div>
                    ) : (
                        <div className="excelname">FILE NAME.xlsx</div>
                    )}
                    {this.state.sheetName ? (
                        <div className="sheetname">{this.state.sheetName}</div>
                    ) : (
                        <div className="sheetname">Sheet</div>
                    )}
                </FileUploadPageBodyMiddle>
                <FileUploadPageBodyFooter>
                    {this.state.dataLoaded && (
                        <div>
                            <SheetTable cols={this.state.cols} rows={this.state.rows} />
                        </div>
                    )}
                </FileUploadPageBodyFooter>
            </div>
        );
    }
}

export default ExcelForm;
