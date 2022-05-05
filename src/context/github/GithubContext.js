import { createContext, useState } from "react";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();
    setUsers(data);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
