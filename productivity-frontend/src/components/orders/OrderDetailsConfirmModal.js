import React, { Fragment, useState, useContext } from "react";
import Button from "../buttons/Button";
import { orderRepository } from "../../repositories/orderRepository";

export const OrderDetailsConfirmModal = ({
  toggleShow,
  values,
  order,
  modalText,
}) => {
  const [trackingNo, setTrackingNo] = useState();
  const [courierName, setCourierName] = useState();
  const [deniedReason, setDeniedReason] = useState();
  const [cost, setCost] = useState();

  const trackingField = (event) => {
    setTrackingNo(event.target.value);
  };

  const courierField = (event) => {
    setCourierName(event.target.value);
  };

  const deniedReasonField = (event) => {
    setDeniedReason(event.target.value);
  };

  const costField = (event) => {
    setCost(event.target.value);
  };

  const updateOrder = () => {
    if (values.updateField === "DESPATCHED") {
      order.trackingNumber = trackingNo;
      order.courier = courierName;
      order.cost = cost;
    } else if (values.updateField == "APPROVED") {
      order.approvalDate = new Date().toLocaleDateString();
    } else if (values.updateField == "DENIED") {
      order.deniedReason = deniedReason;
    } else if (values.updateField == "COLLECTION") {
      order.cost = cost;
    }
    order.status = values.updateField;
    orderRepository.updateOrderStatus(order);
    toggleShow();
  };

  return (
    <div className="backdrop">
      <div className="confirmModal">
        <header className="header">
          <h2>{values.header}</h2>
        </header>
        <div className="content">
          <div className="productContainer">
            {modalText}
            {values.header}
          </div>

          <div className="deliveryInfoInputs">
            {values.updateField === "DESPATCHED" && (
              <Fragment>
                <div>
                  <label htmlFor="trackingNo">Tracking number: </label>
                  <input
                    type="text"
                    name="tracking"
                    id="trackingNo"
                    className="trackingNo"
                    onChange={trackingField}
                  />
                </div>
                <div>
                  <label htmlFor="courierName">Courier: </label>
                  <input
                    type="text"
                    name="courier"
                    id="courierName"
                    className="courierName"
                    onChange={courierField}
                  />
                </div>
              </Fragment>
            )}

            {values.updateField === "DENIED" && (
              <div>
                <label htmlFor="deniedReason">Reason: </label>
                <input
                  type="text"
                  name="deniedReason"
                  id="deniedReason"
                  className="deniedReasonInput"
                  onChange={deniedReasonField}
                />
              </div>
            )}
          </div>
        </div>

        <footer className="actions">
          <Button
            label="Cancel"
            onClickFunction={() => toggleShow()}
            buttonClass="cancel modalButton"
          />
          {values.updateField === null && (
            <Button
              label="Confirm"
              onClickFunction={() => toggleShow()}
              buttonClass="confirm modalButton"
            />
          )}
          {values.updateField !== null && (
            <Button
              label="Confirm"
              onClickFunction={() => updateOrder()}
              buttonClass="confirm modalButton"
            />
          )}
        </footer>
      </div>
    </div>
  );
};
