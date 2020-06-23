import React, { useState } from "react";
import { Container, InputForm, LoginLogo } from "./LoginInput.style";
import logo from "./kai_logo.png";
import { Redirect } from "react-router-dom";

const LoginForm = ({ authenticated, login, location }) => {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ user_id, password });
    } catch (e) {
      alert("아이디와 비밀번호를 확인하세요 ");
      setUserId("");
      setPassword("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const { from } = location.state || { from: { pathname: "/kmapinfo" } };
  if (authenticated) return <Redirect to={from} />;

  const test_font = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  };

  return (
    <>
      <img src={logo} alt="image" />
      <h1 style={test_font}>ID : 123</h1>
      <h1 style={test_font}>PW : 1234</h1>
      <Container>
        <InputForm>
          <h1>LOGIN</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="form-group">
            <label>ID</label>
            <input
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
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <button type="button" onClick={handleClick}>
            Login
          </button>
          {/* </form> */}
        </InputForm>
      </Container>
    </>
  );
};
export default LoginForm;