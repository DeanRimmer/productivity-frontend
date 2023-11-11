import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import { userRepository } from "../../repositories/userRepository";
export const UserListItem = ({ user, toggleRole }) => {
  const [toggledOn, setToggledOn] = useState(user.admin);
  const [disabled, setDisabled] = useState(false);

  const handleToggleRole = async (id) => {
    setDisabled(true);
    const response = await userRepository.toggleRole(id);
    setDisabled(false);
    setToggledOn(!toggledOn);
  };

  return (
    <div className="userItem">
      <div>{user.fullName}</div>
      <Switch
        disabled={disabled}
        checked={toggledOn}
        onChange={() => handleToggleRole(user.id)}
      ></Switch>
    </div>
  );
};
