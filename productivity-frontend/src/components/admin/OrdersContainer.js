import React, { useEffect, useState } from "react";
import { orderRepository } from "../../repositories/orderRepository";
import OrdersNavBar from "./OrdersNavBar";
import OrdersTable from "./OrdersTable";
import Pagination from "@material-ui/lab/Pagination";

const ADMIN_ORDERS_PAGE_SIZE = 10;

const OrdersContainer = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  useEffect(() => {
    retrieveOrders();
  }, [page]);

  const dateFromOnChangeHandler = (event) => {
    setDateFrom(event.target.value);
  };

  const dateToOnChangeHandler = (event) => {
    setDateTo(event.target.value);
  };

  const retrieveOrders = async () => {
    const pageResponse = await orderRepository.getPaginatedOrders(
      page - 1,
      ADMIN_ORDERS_PAGE_SIZE,
      "createdAt",
      dateFrom,
      dateTo
    );
    setOrders(pageResponse.content);
    setTotalPages(pageResponse.totalPages);
  };

  const searchOnSubmitHandler = (event) => {
    event.preventDefault();
    setPage(1);
    retrieveOrders();
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const resetSearchParamsHandler = (dateFromInputRef, dateToInputRef) => {
    dateFromInputRef.current.value = "";
    dateToInputRef.current.value = "";

    setDateFrom(null);
    setDateTo(null);
    setPage(1);
    retrieveOrders();
  };

  const downloadOrdersDataHandler = async () => {
    const response = await orderRepository.downloadOrdersReport(
      dateFrom,
      dateTo
    );
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "orders.xlsx";
      a.click();
    });
  };

  return (
    <div className="admin-orders-container">
      <h3 className="admin-section-header">Orders</h3>
      <OrdersNavBar
        searchOnClick={searchOnSubmitHandler}
        dateFromOnChange={dateFromOnChangeHandler}
        dateToOnChange={dateToOnChangeHandler}
        resetSearchParamsOnClick={resetSearchParamsHandler}
        downloadOnClick={downloadOrdersDataHandler}
      />
      <OrdersTable orders={orders} />
      <Pagination
        className="admin-pagination"
        count={totalPages}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
};

export default OrdersContainer;
