import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const inititalState = {
    users: [],
  };
  const [state, dispatch] = useReducer(githubReducer, inititalState);

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
