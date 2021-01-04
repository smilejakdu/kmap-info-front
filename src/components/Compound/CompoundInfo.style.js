import styled from 'styled-components';
import palette from '../../util/styles/palette';

const CompoundInfoBody = styled.div`
  margin-top: 20px;
`;

const LeftBody = styled.div`
  float: left;
  width: 30%;
`;

const RightBody = styled.div`
  float: right;
  width: 70%;
`;

const LeftImage = styled.div`
  background: white;

  img {
    border: 1px solid ${palette.base_clor[0]};
    width: 90%;
  }
`;

const KmapCompoundName = styled.div`
  border: 1px solid ${palette.base_clor[3]};
  margin-bottom: 20px;

  th {
    background: ${palette.base_clor[2]};
    padding: 10px;
    color: black;
    font-size: 15px;
    border-right: 1px solid ${palette.base_clor[2]};
  }

  td {
    font-size: 25px;
    padding-left: 5rem;
    color: ${palette.base_clor[5]};
  }
`;

const RightBodyMiddle = styled.div`
  position: relative;
  min-height: 35rem;
  @media (max-width: 1300px) {
    min-height: 50rem;
  }
`;

const KmapTwokSubset = styled.div`
  th {
    border: 1px solid ${palette.base_clor[2]};
    float: left;
    width: 20rem;
    font-size: 2.5rem;
    color: black;
    background: ${palette.base_clor[2]};
    font-weight: bold;

    p {
      justify-content: center;
      text-align: center;
    }
  }

  td {
    border: 1px solid ${palette.base_clor[3]};
    padding: 20px;
    font-size: 3.6rem;
    font-weight: bold;
    float: left;
  }
`;

const CheckBox = styled.div`
  float: right;

  input {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 5px;
  }

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const CountryCheckBox = styled.div`
  float: left;
  margin-right: 5rem;
  font-size: 2rem;
`;

const IpkExpasionCheckBox = styled.div`
  float: left;
  font-size: 2rem;
`;

const InputCheckBox = styled.input.attrs({})`
  border: 0;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  background: ${palette.gray[4]};
`;

const InputNoneCheckBox = styled.input.attrs({})`
  border: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${palette.base_clor[0]};
`;

const PubBox = styled.div`
  position: absolute;
  border: 1px solid ${palette.base_clor[3]};
  width: 100%;
  bottom: 0;
`;

const PubBoxCID = styled.table`
  float: left;
  width: 50%;

  tr {
    th {
      background: ${palette.base_clor[2]};
      border-right: 1px solid ${palette.base_clor[1]};
      border-bottom: 1px solid ${palette.base_clor[1]};
      padding: 20px;
      color: black;
      width: 40%;
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
      padding: 10px;
      width: 60%;
    }
  }

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

const InChiKey = styled.table`
  width: 50%;

  tr {
    th {
      background: ${palette.base_clor[2]};
      border-left: 1px solid ${palette.base_clor[3]};
      border-right: 1px solid ${palette.base_clor[3]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
      padding: 10px;
      width: 30%;
    }
  }

  @media (max-width: 1300px) {
    border-top: 1px solid ${palette.base_clor[3]};
    width: 100%;
  }
`;

const PubChemName = styled.table`
  width: 100%;

  tr {
    th {
      background: ${palette.base_clor[2]};
      border-top: 1px solid ${palette.base_clor[2]};
      border-right: 1px solid ${palette.base_clor[2]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
      padding: 10px;
      width: 80%;
      border-top: 1px solid ${palette.base_clor[3]};
    }
  }
`;

const RightBodyFooter = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const KnownTargets = styled.table`
  width: 100%;

  tr {
    th {
      background: ${palette.base_clor[2]};
      border: 1px solid ${palette.base_clor[3]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
      padding: 10px;
      border: 1px solid ${palette.base_clor[3]};
      width: 80%;
    }
  }
`;

const InformationHeader = styled.div`
  color: ${palette.black};
  background: ${palette.base_clor[2]};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  border-left: 1px solid ${palette.base_clor[2]};
  border-right: 1px solid ${palette.base_clor[2]};
  font-weight: bold;
  font-size: 2rem;
`;

const InformationBody = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  font-size: 2rem;
  border: 1px solid ${palette.base_clor[3]};
  padding: 10px;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const KaiChemIdTH = styled.th`
  background: ${palette.base_clor[2]};
  color: black;
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
  border: 1px solid ${palette.base_clor[1]};
`;

const KaiChemIdTD = styled.td`
  border: 1px solid ${palette.base_clor[1]};
  font-size: 2rem;
  padding-left: 80px;
  padding-right: 80px;
`;

const ChemIndexSearchBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid ${palette.base_clor[3]};
  display: flex;

  @media (max-width: 1470px) {
    position: relative;
  }
`;

const KaiPharmChemIndex = styled.div`
  font-size: 1.5rem;
  width: 13rem;
  background: ${palette.base_clor[2]};
  font-weight: bold;
  color: black;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
`;

const KaiChemIndexNumber = styled.div`
  color: black;
  padding-left: 3rem;
  padding-right: 3rem;
  vertical-align: middle;
  border-right: 1px solid ${palette.base_clor[3]};
  font-size: 2.5rem;
`;

const KaiChemIndexUpDown = styled.div`
  font-size: 2.5rem;
  text-align: center;
  border-right: 1px solid ${palette.base_clor[3]};
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    color: ${palette.base_clor[4]};
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  position: relative;

  input {
    font-size: 1.5rem;
    padding: 10px;
    width: 25rem;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 1px solid ${palette.base_clor[3]};
    background: ${palette.base_clor[3]};
    font-size: 1.5rem;
    padding: 10px;
    color: white;
  }

  div {
    width: 100%;
    border: 1px solid ${palette.base_clor[3]};
    overflow-y: scroll;
    max-height: 500px;
    padding: 12px;
    z-index: 1;
    background: white;
    position: absolute;

    h6 {
      font-size: 20px;
      padding: 8px;

      &:hover {
        cursor: pointer;
        color: ${palette.base_clor[4]};
      }
    }
  }
`;

export {
  CompoundInfoBody,
  LeftImage,
  LeftBody,
  KmapCompoundName,
  RightBody,
  KmapTwokSubset,
  RightBodyMiddle,
  RightBodyFooter,
  CheckBox,
  CountryCheckBox,
  IpkExpasionCheckBox,
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
};
