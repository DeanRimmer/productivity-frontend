export const buildDefaultHeaders = () => {
  try {
    const credentials = sessionStorage.getItem(
      `oidc.user:${process.env.REACT_APP_AUTHORITY}:${process.env.REACT_APP_CLIENT_ID}`
    );
    const parsedCredentials = JSON.parse(credentials);
    const accessToken = parsedCredentials.access_token;
    const defaultHeaders = {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    };

    return defaultHeaders;
  } catch (error) {
    console.warn(
      "Access token not found - sending request without Authorization header..."
    );

    const defaultHeaders = {
      "Content-Type": "application/json",
    };
    return defaultHeaders;
  }
};
