import React from "react";

const OrdersTable = ({ orders }) => {
  return (
    <div>
      <table className="admin-orders-table">
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="item">Item</th>
            <th className="order-date">Order Date</th>
            <th className="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.userName}</td>
              <td>{order.product}</td>
              <td>{order.createdAt}</td>
              <td>{order.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
