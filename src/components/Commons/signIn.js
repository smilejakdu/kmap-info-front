import request from "../../util/request";

const users = [{ user_id: "123", password: "1234" }];

const signIn = ({ user_id, password }) => {
  const user = users.find(
    (user) => user.user_id === user_id && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
};

export default signIn;
