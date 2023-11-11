import React, { useState, useEffect } from "react";
import { useReactOidc } from "@axa-fr/react-oidc-context";
import { userRepository } from "../repositories/userRepository";

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return <div></div>;
};

export default UserContext;
