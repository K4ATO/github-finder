import React from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);
  return <div>{user.login}</div>;
};

export default User;
