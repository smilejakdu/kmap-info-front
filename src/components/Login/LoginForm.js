import React, { useState } from "react";
import {
  Container,
  InputForm,
  LoginLogo,
  Input,
  Button,
} from "./LoginInput.style";
import { Redirect } from "react-router-dom";
import image from "../../util/image/logo.png";
import request from "../../util/request";
import Modal from "../Modal/Modal";

const LoginForm = ({ authenticated, login, location }) => {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const ModalShowOpen = () => {
    setModalShow(true);
  };

  const ModalShowClose = () => {
    setModalShow(false);
  };

  const handleClick = () => {
    request
      .post("/account/login", {
        user_id: user_id,
        password: password,
      })
      .then((res) => {
        setUserId(user_id);
        setPassword(password);
        login({ user_id, password });
      })
      .catch((error) => {
        setModalShow(true);
        setUserId("");
        setPassword("");
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const { from } = location.state || { from: { pathname: "/kmapinfo" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div>
      <LoginLogo>
        <img src={"/kmapinfo" + image} width="70%" />
      </LoginLogo>
      <div style={{ textAlign: "center" }}></div>
      {modalShow && (
        <Modal
          isOpen={ModalShowOpen}
          close={ModalShowClose}
          text={"아이디와 비밀번호를 확인하세요"}
        ></Modal>
      )}
      <Container>
        <InputForm>
          <h1>LOGIN</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="form-group">
            <Input
              type="text"
              placeholder="ID"
              name="user_id"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <Button type="button" onClick={handleClick}>
            Login
          </Button>
          {/* </form> */}
        </InputForm>
      </Container>
    </div>
  );
};
export default LoginForm;
