import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { orderRepository } from "../repositories/orderRepository";
import OrderDetails from "../components/orders/OrderDetails";

const OrderDetailsPage = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  return (
    <div className="orderDetailsPage">
      <React.Fragment>
        {order !== null && <OrderDetails order={order} viewDetails={false} />}
      </React.Fragment>
    </div>
  );
};

export default OrderDetailsPage;
