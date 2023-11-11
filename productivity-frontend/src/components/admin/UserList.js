import React from "react";
import { UserListItem } from "./UserListItem";
const UserList = ({ users }) => {
  return (
    <div className="userList">
      <h3 className="admin-section-header">Users</h3>
      {users.map((user) => (
        <UserListItem user={user} />
      ))}
    </div>
  );
};

export default UserList;
