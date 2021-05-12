import React, { useState, useEffect } from 'react';
import {
  CompoundInfoBody, LeftImage, LeftBody, KmapCompoundName, RightBody, KmapTwokSubset, RightBodyMiddle, RightBodyFooter, CheckBox, CountryCheckBox, IpkExpasionCheckBox,
  PubBox,
  PubBoxCID,
  InChiKey,
  PubChemName,
  KnownTargets,
  InformationHeader,
  InformationBody,
  KaiChemIdTH,
  KaiChemIdTD,
  SearchBox,
  Header,
  KaiPharmChemIndex,
  KaiChemIndexNumber,
  KaiChemIndexUpDown,
  ChemIndexSearchBox,
  InputCheckBox,
  InputNoneCheckBox,
} from './CompoundInfo.style';
import request from '../../util/request';
import axios from 'axios';
import Modal from '../Modal/Modal';

// redux
import { connect } from 'react-redux';

const CompoundInfo = ({ search_data }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [chemindex, setChemindex] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  let { search_input } = search_data;
  if (search_input === '') {search_input = 'Abacavir'}

  const ModalShowOpen = () => { setModalShow(true) };
  const ModalShowClose = () => { setModalShow(false) };

  useEffect(() => {
    request
      .get(`/compound/search/${search_input}`)
      .then((res) => {
        let {data: { data }} = res;
        setData({
          id: data[0].id,
          chem_series: data[0].chem_series,
          chem_series_cid: data[0].chem_series_cid,
          cid: data[0].cid,
          compound: data[0].compound,
          europe: data[0].europe,
          inchikey: data[0].inchikey,
          information: data[0].information,
          ipk: data[0].ipk,
          japan: data[0].japan,
          kaichem_id: data[0].kaichem_id,
          kaipharm_chem_index: data[0].kaipharm_chem_index,
          known_target: data[0].known_target,
          nci_cancer: data[0].nci_cancer,
          prestwick: data[0].prestwick,
          pubchem_name: data[0].pubchem_name,
          selleckchem: data[0].selleckchem,
          subset: data[0].subset,
          usa: data[0].usa,
        });
        setChemindex(data[0].id);
      })
      .catch((error) => {
        alert('데이터가 없습니다.');
      });
  }, []);

  // ChemIndex 숫자 변화로 데이터를 가져오게 된다.
  const KaipharmChemIndexGet = (chemindex) => {
    request
      .get(`/compound/${chemindex}`)
      .then((res) => {
        let {
          data: { data },
        } = res;

        setData({
          id: data[0].id,
          chem_series: data[0].chem_series,
          chem_series_cid: data[0].chem_series_cid,
          cid: data[0].cid,
          compound: data[0].compound,
          europe: data[0].europe,
          inchikey: data[0].inchikey,
          information: data[0].information,
          ipk: data[0].ipk,
          japan: data[0].japan,
          kaichem_id: data[0].kaichem_id,
          kaipharm_chem_index: data[0].kaipharm_chem_index,
          known_target: data[0].known_target,
          nci_cancer: data[0].nci_cancer,
          prestwick: data[0].prestwick,
          pubchem_name: data[0].pubchem_name,
          selleckchem: data[0].selleckchem,
          subset: data[0].subset,
          usa: data[0].usa,
        });
        setChemindex(data[0].id);
        setResult([]);
      })
      .catch((error) => {
        alert('데이터가 없습니다.');
      });
  };

  // Search 결과 서버에 요청 함수 
  const fetchSearchResults = (query) => {
    const searchUrl = `/compound/search?query=${query}`;
    request
      .get(searchUrl)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setResult(data);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('error : ', error);
        }
      });
  };

// 가져온 데이터를 가져오고 나서 클릭하게 되면 가져오는 함수 
  const searchDataClick = (search_data) => {
    return request
      .get(`/compound/search/${search_data}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setData({
          id: data[0].id,
          chem_series: data[0].chem_series,
          chem_series_cid: data[0].chem_series_cid,
          cid: data[0].cid,
          compound: data[0].compound,
          europe: data[0].europe,
          inchikey: data[0].inchikey,
          information: data[0].information,
          ipk: data[0].ipk,
          japan: data[0].japan,
          kaichem_id: data[0].kaichem_id,
          kaipharm_chem_index: data[0].kaipharm_chem_index,
          known_target: data[0].known_target,
          nci_cancer: data[0].nci_cancer,
          prestwick: data[0].prestwick,
          pubchem_name: data[0].pubchem_name,
          selleckchem: data[0].selleckchem,
          subset: data[0].subset,
          usa: data[0].usa,
        });
        setResult([]);
        setQuery(data[0].compound);
        setChemindex(data[0].id);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

//  input 에 들어가는 값 , 들어가는 값에 따라 데이터 요청을 계속 보내게 된다.
  const handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      setQuery(query);
      setResult([]);
    } else {
      setQuery(query);
      fetchSearchResults(query);
    }
  };

  // 불러온 데이터 중에 하나를 클릭 했을 경우 
  const renderSearchResults = () => {
    if (Object.keys(result).length && result.length) {
      return (
        <div>
          {result.map((res) => {
            return (
              <h6 onClick={() => searchDataClick(res.compound)}>
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
  };

  // 데이터가 있다면 , InputCheckBox
  // 데이터가 없다면 , InputNoneCheckBox
  const CountryData = (data, text) => {
    return (
      <tr>
        <td>{data === 1 ? <InputCheckBox /> : <InputNoneCheckBox />}</td>
        <td>{text}</td>
      </tr>
    );
  };

  // ChemIndex up button click
  const KaipharmChemUp = () => {
    KaipharmChemIndexGet(chemindex + 1);
  };

  //  ChemIndex down button click
  const KaipharmChemDown = () => {
    if (chemindex === 1) {
      setModalShow(true);
    } else {
      KaipharmChemIndexGet(chemindex - 1);
    }
  };

  // html css 화면 부분 받아온 데이터를 화면에 뿌려주게 된다.
  return (
    <CompoundInfoBody>
      <Header>
        <KaiChemIdTH>KaiChem ID</KaiChemIdTH>
        <KaiChemIdTD>{data.kaichem_id}</KaiChemIdTD>
        <ChemIndexSearchBox>
          <KaiPharmChemIndex>
            Kaipharm
            <div></div>
            Chem Index
          </KaiPharmChemIndex>
          <KaiChemIndexNumber>{data.kaipharm_chem_index}</KaiChemIndexNumber>
          <KaiChemIndexUpDown onClick={() => KaipharmChemDown()}>
            &lt;
          </KaiChemIndexUpDown>
          <KaiChemIndexUpDown onClick={() => KaipharmChemUp()}>
            &gt;
          </KaiChemIndexUpDown>
          <SearchBox>
            <input type='text' value={query} onChange={handleOnInputChange} />
            {renderSearchResults()}
          </SearchBox>
        </ChemIndexSearchBox>
      </Header>
      {modalShow && (
        <Modal
          isOpen={ModalShowOpen}
          close={ModalShowClose}
          text={'처음데이터입니다.'}
        />
      )}
      <LeftBody>
        <LeftImage>
          {
            data.cid ? (
              <img
                src={`https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=${data.cid}&t=l`}
              />) : (
              <img />
            )
          }
        </LeftImage>
      </LeftBody>
      <RightBody>
        <KmapCompoundName>
          <th>KMAP Compound Name</th>
          <td>{data.compound}</td>
        </KmapCompoundName>
        <RightBodyMiddle>
          <KmapTwokSubset>
            <th>
              <p>KMAP-2K</p>
              <p>Subset</p>
            </th>
            {data.subset ? <td>{data.subset}</td> : <td>N/A</td>}
          </KmapTwokSubset>
          <CheckBox>
            <CountryCheckBox>
              <table>
                {CountryData(data.usa, 'US FDA approved')}
                {CountryData(data.europe, 'EUROPE approved')}
                {CountryData(data.japan, 'JAPAN approved')}
                {CountryData(data.nci_cancer, 'NCI Cancer Drug')}
              </table>
            </CountryCheckBox>
            <IpkExpasionCheckBox>
              <table>
                {CountryData(data.ipk, 'IPK Expansion')}
                {CountryData(data.prestwick, 'Prestwick')}
                {CountryData(data.selleckchem, 'SelleckChem')}
              </table>
            </IpkExpasionCheckBox>
          </CheckBox>
          <PubBox>
            <PubBoxCID>
              <tr>
                <th>pubchem CID</th>
                <td>{data.cid}</td>
              </tr>
            </PubBoxCID>
            <InChiKey>
              <tr>
                <th>InChIKey</th>
                <td>{data.inchikey}</td>
              </tr>
            </InChiKey>
            <PubChemName>
              <tr>
                <th>PubChem NAME</th>
                <td colSpan='3'>{data.pubchem_name}</td>
              </tr>
            </PubChemName>
          </PubBox>
        </RightBodyMiddle>
        <RightBodyFooter>
          <KnownTargets>
            <tr>
              <th>Known Targets</th>
              <td colSpan='3'>{data.known_target}</td>
            </tr>
          </KnownTargets>
          <InformationHeader>Information</InformationHeader>
          {data.information ? (
            <InformationBody>{data.information}</InformationBody>
          ) : (
            <InformationBody>NA</InformationBody>
          )}
        </RightBodyFooter>
      </RightBody>
    </CompoundInfoBody>
  );
};

// redux search_data 를 가져온다
export default connect((state) => ({
  search_data: state,
}))(CompoundInfo);
