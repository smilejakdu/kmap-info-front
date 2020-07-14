import styled from "styled-components";
import palette from "../../util/styles/palette";

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
  img {
    border: 1px solid black;
    width: 90%;
  }
`;

const KmapCompoundName = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;

  th {
    background: coral;
    padding: 10px;
    font-size: 15px;
    border-right: 1px solid black;
  }
  td {
    font-size: 25px;
    padding-left: 5rem;
  }
`;

const RightBodyMiddle = styled.div`
  position: relative;
  border: 1px solid red;
  min-height: 35rem;
  @media (max-width: 1000px) {
    min-height: 50rem;
  }
`;

const RightBodyFooter = styled.div`
  border: 1px solid blue;
`;

const KmapTwokSubset = styled.div`
  th {
    border: 1px solid black;
    float: left;
    width: 20rem;
    font-size: 2.5rem;
    background: coral;
    font-weight: bold;

    p {
      justify-content: center;
      text-align: center;
    }
  }

  td {
    border: 1px solid black;
    padding: 20px;
    font-size: 3.5rem;
    font-weight: bold;
    float: left;
  }
`;

const CheckBox = styled.div`
  float: right;
  margin-right: 10rem;
  input {
    width: 4rem;
    height: 3rem;
  }
`;

const CountryCheckBox = styled.div`
  float: left;
  margin-right: 5rem;
`;

const IpkExpasionCheckBox = styled.div`
  float: left;
`;

const PubBox = styled.div`
  position: absolute;
  border: 1px solid ${palette.blue[6]};
  width: 100%;
  bottom: 0;
`;

const PubBoxCID = styled.table`
  float: left;
  width: 50%;
  tr {
    th {
      background: ${palette.blue[1]};
      border: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 40%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
      padding: 10px;
      width: 60%;
      border: 1px solid black;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const InChiKey = styled.table`
  width: 50%;
  tr {
    th {
      background: ${palette.blue[1]};
      border: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
      padding: 10px;
      width: 30%;
      border: 1px solid black;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const PubChemName = styled.table`
  width: 100%;
  tr {
    th {
      background: ${palette.blue[1]};
      border: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
      padding: 10px;
      width: 80%;
      border: 1px solid black;
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
};
