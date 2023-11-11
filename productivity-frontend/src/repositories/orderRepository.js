import { buildDefaultHeaders } from "../shared/helpers";

export const orderRepository = {
  getAllOrders: async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + "orders",
      {
        method: "GET",
        headers: buildDefaultHeaders(),
      }
    );

    const currentResponse = await response.json();
    return currentResponse;
  },
  getPaginatedOrders: async (pageNo, pageSize, sort, dateFrom, dateTo) => {
    var url = new URL(
      process.env.REACT_APP_BACKEND_BASE_URL + "orders/paginated"
    );
    var params = {
      pageNo: pageNo,
      pageSize: pageSize,
      sort: sort,
    };
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: buildDefaultHeaders(),
    });

    const currentResponse = await response.json();
    return currentResponse;
  },
  getFilteredOrders: async (filters) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + "orders/filters",
      {
        method: "POST",
        body: JSON.stringify(filters),
        headers: buildDefaultHeaders(),
      }
    );

    const currentResponse = await response.json();
    return currentResponse;
  },
  userProducts: async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + "user/products",
      {
        method: "GET",
        headers: buildDefaultHeaders(),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  getUserOrders: async (email) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `order/user?email=${email}`,
      {
        method: "GET",
        headers: buildDefaultHeaders(),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  updateOrderStatus: async (order) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `order/${order.id}`,
      {
        method: "PUT",
        headers: buildDefaultHeaders(),
        body: JSON.stringify(order),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  getOrderById: async (id) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `order/${id}`,
      {
        method: "GET",
        headers: buildDefaultHeaders(),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  createOrder: async (order) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + "order/create",
      {
        method: "POST",
        headers: buildDefaultHeaders(),
        body: JSON.stringify(order),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  downloadOrdersReport: async (dateFrom, dateTo) => {
    var url = new URL(
      process.env.REACT_APP_BACKEND_BASE_URL + "reports/download"
    );
    var params = {
      sort: "createdAt",
    };
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url, {
      method: "GET",
      headers: buildDefaultHeaders(),
    });
    return response;
  },
};
