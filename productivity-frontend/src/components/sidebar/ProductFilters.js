import React, { useState, useEffect } from "react";

const orderProducts = [
  {
    name: "Laptop",
    key: "laptopCb",
    label: "Laptop",
  },
  {
    name: "Rucksack",
    key: "rucksackCb",
    label: "Rucksack",
  },
  {
    name: "Messenger Bag",
    key: "messengerBagCb",
    label: "Messenger bag",
  },
  {
    name: "Headset",
    key: "headsetCb",
    label: "Headset",
  },
  {
    name: "Mouse and Keyboard",
    key: "mouseKbCb",
    label: "Mouse and Keyboard",
  },
  {
    name: "Monitor",
    key: "monitorCb",
    label: "Monitor",
  },
];

const ProductFilters = ({ updateProductFilters }) => {
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
    updateProductFilters(checkBoxes);
  }, [checkBoxes]);
  return (
    <form className="productFilters">
      {orderProducts.map((item) => (
        <ul key={item.key}>
          <label>
            {item.label}
            <input
              className="alignRight"
              name={item.name}
              value={item.name}
              type="checkbox"
              checked={orderProducts[item.name]}
              onChange={handleInputChange}
            />
          </label>
        </ul>
      ))}
    </form>
  );
};

export default ProductFilters;
