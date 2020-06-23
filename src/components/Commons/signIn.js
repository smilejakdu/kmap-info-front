import request from "../../util/request";

const signIn = ({ user_id, password }) => {
  const LoginCheck = () => {
    return request
      .post("/account/login", {
        user_id: user_id,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  const status_result = LoginCheck();

  if (status_result === undefined) throw new Error();
  return status_result;
};

export default signIn;
