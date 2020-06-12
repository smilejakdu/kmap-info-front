import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const InputForm = styled.div`
  margin: 80px auto 20px;
  padding-top: 60px;
  height: 280px;
  width: 350px;
  border-radius: 15px;
  background: #f2f3f7;

  h1 {
    text-align: center;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    height: 70px;
    margin: 0 20px 0;
    font-size: 1.2rem;
  }
  label {
    margin: 10px 0 0;
  }
  input {
    height: 100%;
  }

  button {
    margin: 20px;
    width: 80px;
    height: 30px;
    background-color: gold;
    border-radius: 5px;
  }
`;

export { Container, InputForm };
