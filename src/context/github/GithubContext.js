import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const inititalState = {
    users: [],
  };
  const [state, dispatch] = useReducer(githubReducer, inititalState);
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`);
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
