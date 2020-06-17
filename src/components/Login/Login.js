import React, { Component } from "react";
import axios from "axios";
import { Container, InputForm } from "./LoginInput.style";
import request from "../../util/request";

class Login extends Component {
  state = {};
  render() {
    return (
      <Container>
        <InputForm>
          <h1>로그인</h1>
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
          <button type="submit">Submit</button>
          {/* </form> */}
        </InputForm>
      </Container>
    );
  }
}
export default Login;
