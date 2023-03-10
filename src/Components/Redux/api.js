import axios from "axios";

export const UserApi = async () =>
  await axios.get(
    "https://crudcrud.com/api/ca26fe2f0f854fb88678fd9964e7fdb7/users"
  );

export const createUserApi = async (user) =>
  await axios.post(
    "https://crudcrud.com/api/ca26fe2f0f854fb88678fd9964e7fdb7/users",
    user
  );

export const delUserApi = async (userId) =>
  await axios.delete(
    `https://crudcrud.com/api/ca26fe2f0f854fb88678fd9964e7fdb7/users/${userId}`
  );

export const updateUserApi = async (UserID, info) =>
  //    console.log("eee",UserID,userInfo)
  await axios.put(
    `https://crudcrud.com/api/ca26fe2f0f854fb88678fd9964e7fdb7/users/${UserID}`,
    info
  );
