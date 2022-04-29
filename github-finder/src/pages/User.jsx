import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
};

export default User;
