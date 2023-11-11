import React, { useRef } from "react";

const OrdersNavBar = ({
  searchOnClick,
  dateFromOnChange,
  dateToOnChange,
  resetSearchParamsOnClick,
  downloadOnClick,
}) => {
  const dateFromInputRef = useRef();
  const dateToInputRef = useRef();

  const resetSearchParamsHandler = () => {
    resetSearchParamsOnClick(dateFromInputRef, dateToInputRef);
  };

  return (
    <div>
      <form
        id="admin-orders-form"
        className="admin-orders-nav-form"
        onSubmit={searchOnClick}
      >
        <label htmlFor="dateFrom">Date From</label>
        <input
          type="date"
          id="dateFrom"
          name="dateFrom"
          onChange={dateFromOnChange}
          ref={dateFromInputRef}
        />
        <label htmlFor="dateTo">Date To</label>
        <input
          type="date"
          id="dateTo"
          name="dateTo"
          onChange={dateToOnChange}
          ref={dateToInputRef}
        />
        <button className="admin-search-orders-button" type="submit">
          Search
        </button>
        <button
          className="admin-reset-orders-button"
          onClick={resetSearchParamsHandler}
        >
          Reset
        </button>
        <button
          className="admin-download-orders-button"
          onClick={downloadOnClick}
        >
          Download
        </button>
      </form>
    </div>
  );
};

export default OrdersNavBar;
