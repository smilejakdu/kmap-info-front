import React, { Component } from "react";
import axios from "axios";
import { Container, InputForm, LoginLogo } from "./LoginInput.style";
import request from "../../util/request";
import logo from "./kaipharm_logo_small.png";

class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <LoginLogo>
          <img src={logo} alt="Logo" />
        </LoginLogo>
        <Container>
          <InputForm>
            <h1>LOGIN</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="form-group">
              <label>ID</label>
              <input type="text" placeholder="ID" name="id" required />
            </div>
            <div className="form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호"
                name="password"
                required
              />
            </div>
            <button type="submit">Login</button>
            {/* </form> */}
          </InputForm>
        </Container>
      </>
    );
  }
}
export default Login;
