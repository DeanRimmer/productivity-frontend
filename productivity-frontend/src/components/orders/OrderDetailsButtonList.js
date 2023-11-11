import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";
import { OrderDetailsConfirmModal } from "./OrderDetailsConfirmModal";

export const OrderDetailsButtonList = ({ order, viewDetails }) => {
  const history = useHistory();
  const handleViewDetails = (order) => {
    history.push("/order/" + order.id);
  };
  const [modalValues, setModalValues] = useState({});
  const [show, setShow] = useState(false);

  const toggleShow = (header, field, input) => {
    const values = {
      header: header,
      updateField: field,
    };
    setShow((value) => !value);
    setModalValues(values);
  };

  return (
    <div className="orderDetailsThirdColumn">
      {show && (
        <OrderDetailsConfirmModal
          toggleShow={toggleShow}
          values={modalValues}
          modalText={"Are you sure you want to "}
          order={order}
        />
      )}

      <div>
        {viewDetails && (
          <Button
            label="View Details"
            onClickFunction={() => handleViewDetails(order)}
            buttonClass="confirm modalButton"
          />
        )}
      </div>
      {order.status === "DESPATCHED" && (
        <div>
          <Button
            label="Mark as Delivered"
            onClickFunction={() => {
              toggleShow("Mark as Delivered", "COMPLETED");
            }}
            buttonClass="confirm modalButton"
          />
        </div>
      )}
      {order.status === "COLLECTION" && (
        <div>
          <Button
            label="Mark as Collected"
            onClickFunction={() => {
              toggleShow("Mark as Collected", "COMPLETED");
            }}
            buttonClass="confirm modalButton"
          />
        </div>
      )}
    </div>
  );
};
