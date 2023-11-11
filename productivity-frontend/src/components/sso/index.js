import React from "react";

export const Authenticating = () => {
  return <span>Redirecting...</span>;
};

export const NotAuthenticated = () => {
  return <span>Authentication in progress...</span>;
};

export const NotAuthorized = () => {
  return <span>Not Authorized!</span>;
};

export const CallbackComponentOverride = () => {
  return <span>Redirecting...</span>;
};

export const SessionExpired = () => {
  return <span>Session expired</span>;
};
