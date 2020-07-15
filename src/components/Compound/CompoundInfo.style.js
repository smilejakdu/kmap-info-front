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
  min-height: 35rem;
  @media (max-width: 1300px) {
    min-height: 50rem;
  }
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
  input {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 5px;
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
      border-right: 1px solid ${palette.blue[6]};
      border-bottom: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 40%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
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
      background: ${palette.blue[1]};
      border-left: 1px solid ${palette.blue[6]};
      border-right: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
      padding: 10px;
      width: 30%;
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${palette.blue[6]};
    width: 100%;
  }
`;

const PubChemName = styled.table`
  width: 100%;
  tr {
    th {
      background: ${palette.blue[1]};
      border-top: 1px solid ${palette.blue[6]};
      border-right: 1px solid ${palette.blue[6]};
      padding: 20px;
      color: black;
      width: 20%;
      font-size: 1.5rem;
    }
    td {
      font-size: 1.5rem;
      padding: 10px;
      width: 80%;
      border-top: 1px solid ${palette.blue[6]};
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
      border: 1px solid ${palette.blue[6]};
      width: 80%;
    }
  }
`;

const InformationHeader = styled.div`
  color: black;
  background: ${palette.blue[1]};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  border-left: 1px solid ${palette.blue[6]};
  border-right: 1px solid ${palette.blue[6]};
  font-weight: bold;
  font-size: 1.5rem;
`;

const InformationBody = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  font-size: 1.5rem;
  border: 1px solid ${palette.blue[6]};
  padding: 10px;
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
};
