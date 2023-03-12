import axios from "axios";
import "./index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_USERS } from "../../redux/slices/users";
import Table from "../../components/Table";

function Users() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(SET_USERS(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return <Table data={users} />;
}

export default Users;
