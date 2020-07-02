import request from "../../util/request";

const signIn = ({ user_id, password }) => {
  console.log("signIn : ", user_id);
  console.log("signIn : ", password);

  const users = [{ user_id: "123", password: "1234" }];
  // const userApi = (user_id, password) => async (e) => {
  //   try {
  //     await request.post("/account/login", {
  //       user_id: user_id,
  //       password: password,
  //     });
  //     users[0]["user_id"] = user_id;
  //     users[0]["password"] = password;
  //     console.log("123sdfsdf12");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // userApi(user_id, password);

  const user = users.find((user) => user.user_id === user_id);
  console.log(user); // undefined

  if (user === undefined) throw new Error();
  // console.log("user end : ", user);
  return user;
};

export default signIn;
