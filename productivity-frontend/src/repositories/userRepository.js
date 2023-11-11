import { buildDefaultHeaders } from "../shared/helpers";

export const userRepository = {
  getAllUsers: async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `users`,
      {
        method: "GET",
        headers: buildDefaultHeaders(),
      }
    );
    const currentResponse = await response.json();
    return currentResponse;
  },
  toggleRole: async (id) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + `admin/toggle/${id}`,
      {
        method: "PUT",
        headers: buildDefaultHeaders(),
      }
    );
    const currentResponse = await response.text();
    return currentResponse;
  },
};
