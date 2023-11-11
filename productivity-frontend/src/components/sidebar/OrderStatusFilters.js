import React, { useState, useEffect } from "react";

const orderStatus = [
  {
    name: "CREATED",
    key: "newOrderCb",
    label: "Created orders",
  },
  {
    name: "APPROVED",
    key: "approvedOrderCb",
    label: "Approved orders",
  },
  {
    name: "DENIED",
    key: "deniedOrdersCb",
    label: "Denied orders",
  },
  {
    name: "CANCELLED",
    key: "cancelledOrdersCb",
    label: "Cancelled orders",
  },
  {
    name: "DESPATCHED",
    key: "despatchedOrderCb",
    label: "Despatched orders",
  },
  {
    name: "COLLECTION",
    key: "collectionOrderCb",
    label: "Despatched orders",
  },
  {
    name: "COMPLETED",
    key: "completedOrderCb",
    label: "Completed orders",
  },
];

const OrderStatusFilters = ({ updateStatusFilters }) => {
  const [checkBoxes, setCheckBoxes] = useState([]);

  const handleInputChange = (event) => {
    const boxes = [...checkBoxes];
    const target = event.target;
    if (target.checked) {
      boxes.push(target.value);
    } else {
      const index = boxes.indexOf(target.value);
      boxes.splice(index, 1);
    }
    setCheckBoxes(boxes);
  };

  useEffect(() => {
    updateStatusFilters(checkBoxes);
  }, [checkBoxes]);

  return (
    <form className="orderStatusFilter">
      {orderStatus.map((item) => (
        <ul key={item.key}>
          <label>
            {item.label}
            <input
              className="alignRight"
              value={item.name}
              name={item.name}
              type="checkbox"
              checked={orderStatus[item.name]}
              onChange={handleInputChange}
            />
          </label>
        </ul>
      ))}
    </form>
  );
};

export default OrderStatusFilters;
