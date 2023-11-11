import React from "react";

export const OrderHeader = ({ order }) => {
  return (
    <div className="orderHeaderContainer">
      <div>{order.product}</div>
      <div>{order.userName}</div>
      <div className="statusBadge">
        <span className={order.status}>{order.status}</span>
      </div>
      <span className="material-icons-outlined">keyboard_arrow_down</span>
    </div>
  );
};
