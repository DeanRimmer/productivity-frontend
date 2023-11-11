import React from "react";
import ProgressBar from "./ProgressBar";
import { OrderDetailsButtonList } from "./OrderDetailsButtonList";

export const OrderDetails = ({ order, viewDetails }) => {
  return (
    <div className="orderDetailsContainer">
      <div className="orderDetailsFirstColumn">
        <div>
          Name: <b>{order.userName}</b>
        </div>
        <div>
          Email: <b>{order.userEmail}</b>
        </div>
        <div>
          Item Ordered: <b>{order.product}</b>
        </div>
        <div>
          Order Date: <b>{order.createdAt}</b>
        </div>
        <div>
          Approval Date: <b>{order.approvalDate}</b>
        </div>
        {order.duplicateReason ? (
          <div className="orderDuplicateText">
            Reason for repeat order: {order.duplicateReason}
          </div>
        ) : null}
        <div></div>
        <div></div>
        <ProgressBar status={order.status} addressOption={order.deliveryTo} />
      </div>
      <div className="orderDetailsSecondColumn">
        <div>
          Tracking No: <b>{order.trackingNumber}</b>
        </div>
        <div>
          Courier: <b>{order.courier}</b>
        </div>
        <div>
          Deliver To: <b>{order.deliveryTo}</b>
        </div>
      </div>
      <OrderDetailsButtonList order={order} viewDetails={viewDetails} />
    </div>
  );
};

export default OrderDetails;
