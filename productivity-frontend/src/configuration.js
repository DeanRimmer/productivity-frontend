const configuration = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: `${process.env.REACT_APP_URL}authentication/callback`,
  response_type: "code",
  post_logout_redirect_uri: process.env.REACT_APP_URL,
  scope: "openid profile api1",
  authority: process.env.REACT_APP_AUTHORITY,
  silent_redirect_uri: `${process.env.REACT_APP_URL}authentication/silent_callback`,
};

export default configuration;
