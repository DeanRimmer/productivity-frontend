import React, { useEffect, useState, useContext } from "react";
import { orderRepository } from "../repositories/orderRepository";
import OrderList from "../components/orders/OrderList";
import Sidebar from "../components/sidebar/Sidebar";

const HomePage = () => {
  const [orders, setOrders] = useState([]);

  const [statusFilters, setStatusFilters] = useState([]);
  const [productFilters, setProductFilters] = useState([]);
  const [dateFilters, setDateFilters] = useState([]);

  const updateStatusFilters = (value) => {
    setStatusFilters(value);
  };

  const updateProductFilters = (value) => {
    setProductFilters(value);
  };

  const updateDateFilters = (value) => {
    setDateFilters(value);
  };

  useEffect(() => {
    const filterOrders = async () => {
      const orders = await orderRepository.getAllOrders({});
      setOrders(orders);
    };
    filterOrders();
  }, [statusFilters, productFilters, dateFilters]);

  return (
    <div className="container">
      {orders && (
        <React.Fragment>
          <OrderList orders={orders} />
        </React.Fragment>
      )}
    </div>
  );
};

export default HomePage;
