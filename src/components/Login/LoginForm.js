import React, { useState } from "react";
import { Container, InputForm, LoginLogo } from "./LoginInput.style";
import { Redirect } from "react-router-dom";
import image from "./logo.png";

const LoginForm = ({ authenticated, login, location }) => {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      console.log("LoginForm : ", user_id, password);
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

  return (
    <>
      <LoginLogo>
        {/* <img src={image} /> */}
        <img src={"/kmapinfo" + image} />
      </LoginLogo>
      <div style={{ textAlign: "center" }}>
        <h2>ID : 123</h2>
        <h2>PW : 1234</h2>
      </div>
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
