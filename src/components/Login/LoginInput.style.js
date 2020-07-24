import styled from "styled-components";
import palette from "../../util/styles/palette";

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const LoginLogo = styled.div`
  justify-content: center;
  text-align: center;
`;

const InputForm = styled.div`
  margin: 80px auto 20px;
  padding-top: 60px;
  height: 400px;
  width: 400px;
  border-radius: 15px;
  background: #f2f3f7;

  h1 {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: ${palette.orange[6]};
  font-size: 3rem;
  margin: 30px;
  width: 80%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${palette.orange[2]};
    color: coral;
  }
`;

const Input = styled.input`
  font-size: 2rem;
  display: flex;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background: #f2f3f7;
  width: 80%;
  margin: 30px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid coral;
  }
`;

export { Container, InputForm, LoginLogo, Button, Input };
