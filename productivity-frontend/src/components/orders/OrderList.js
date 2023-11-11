import React from "react";
import { OrderHeader } from "./OrderHeader";
import { OrderDetails } from "./OrderDetails";
import Collapsible from "../Collapsible";

const OrderList = ({ orders, viewDetails }) => {
  return (
    <div className="orderList">
      {orders.map((order) => (
        <Collapsible key={order.id} label={<OrderHeader order={order} />}>
          <OrderDetails
            key={order.id}
            order={order}
            viewDetails={viewDetails}
          />
        </Collapsible>
      ))}
    </div>
  );
};

export default OrderList;
