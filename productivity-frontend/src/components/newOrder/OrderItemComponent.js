import React from "react";

export const OrderItemComponent = ({ name, toggleProduct, productName }) => {
  const callToggleProduct = (event) => {
    const target = event.target;
    var value = target.value;
    if (target.checked) {
      toggleProduct(true, value);
    } else {
      toggleProduct(false, value);
    }
  };
  return (
    <React.Fragment>
      <label for={productName}>
        <div className={name}></div>
      </label>

      <span className="productName">
        <input
          type="checkbox"
          onChange={callToggleProduct}
          value={productName}
          id={productName}
        />

        {productName}
      </span>
    </React.Fragment>
  );
};
