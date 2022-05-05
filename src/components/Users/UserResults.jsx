import React from "react";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
const UserResults = () => {
  const { users } = useContext(GithubContext);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
