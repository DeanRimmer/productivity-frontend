import React, { useEffect, useState, useContext } from "react";
import UserList from "../components/admin/UserList";
import { userRepository } from "../repositories/userRepository";
import OrdersContainer from "../components/admin/OrdersContainer";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  return <div className="orderDetailsPage"></div>;
};

export default AdminPage;
