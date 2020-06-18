import React, { Component } from "react";
import ExcelInfoList from "../../components/ExcelInfoList/ExcelInfoList";
import Navigation from "../../components/Navigation/Navigation";
import "./ExcelInfoPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import request from "../../util/request";

class ExcelInfoPage extends Component {
  state = {
    exceldata: [],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
    console.log(e);
  };

  handleChangeExcelData = (id) => {
    // 이걸로 바까줄건데 자식에서 이걸 타게끔 해줄거에여
    // 그게 가능하군요 ;;여네네 보여드릴게여 자식에서 이함수를 빌려쓰는거죠

    this.setState((prevState) => ({
      exceldata: prevState.exceldata.filter((excel) => excel.id !== id),
    }));

    //여기까지 이해되셧나요? 자식에서 부모에게 id값을 주고 그 id값을 제외한값이 다시 자식에게넘어가는구조에여
    // 네네 그런데 만약에 제가 id 값을 지정안했으면 excel.name !== name 이렇게 해줘도 되요 ??
    // 네네 그런데 만약에 제가 id 값을 지정안했으면 excel.name !== name 이렇게 해줘도 되요 ?? 네 상관은없는데여 그런데 무결성 제약이라는게있어요 데이터는 고유한 pk값이 무조건 잇어야되여 원래 아니면 구조가 이상한거라 id가아닌 name으로 거시는건 좋지않은패턴이고 심지어 db상에 name은 동일할수가있자나여? 그래서 id가좋아요
    // 헐.. 전 아.요. 그러면 exceldata 이름 같은경우는 아마 제가 key.id 는 한것 같지만 name 으로 받고 뿌려주고 했거든요
    // 헐.. 전 아.요. 그러면 exceldata 이름 같은경우는 아마 제가 key.id 는 한것 같지만 name 으로 받고 뿌려주고 했거든요 네네이름은 여튼 보통 이런식으로 잘안쓰죠 .. ㅠㅠ 넵 감사합니다죠
    // 나머지 진행할게여
  };

  componentDidMount = () => {
    return request
      .get("/excel/upload")
      .then((res) => {
        let {
          data: {
            data: { excel_data },
          },
        } = res;

        // 만약 변경된 state를 보고싶으시면
        this.setState({ exceldata: excel_data }, () => {
          console.log(this.state.exceldata);
        });
        console.log(this.state.exceldata);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  render() {
    console.log(this.state.exceldata);
    return (
      <div className="main">
        <Navigation />
        <div className="search_box">
          <input
            className="search_input"
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색"
            type="text"
          />
        </div>
        <ExcelInfoList
          data={this.state.exceldata.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          handleChangeExcelData={this.handleChangeExcelData}
        />
      </div>
    );
  }
}

export default ExcelInfoPage;
