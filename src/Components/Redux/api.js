import axios from "axios";

export const UserApi = async () =>
  await axios.get(
    "https://crudcrud.com/api/4fc4bbce8f9b4de683a6a82ba49b75eb/users"
  );

export const createUserApi = async (user) =>
  await axios.post(
    "https://crudcrud.com/api/4fc4bbce8f9b4de683a6a82ba49b75eb/users",
    user
  );

export const delUserApi = async (userId) =>
  await axios.delete(
    `https://crudcrud.com/api/4fc4bbce8f9b4de683a6a82ba49b75eb/users/${userId}`
  );

export const updateUserApi = async (UserID, info) =>
  //    console.log("eee",UserID,userInfo)
  await axios.put(
    `https://crudcrud.com/api/4fc4bbce8f9b4de683a6a82ba49b75eb/users/${UserID}`,
    info
  );
