import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const initialState = {
  users: [],
  user: {},
  isLoading: false,
  repos: [],
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /** ========== Set loading; When there was no GithubActions.js ==========*/
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  /** ========== Get user repos; When there was no GithubActions.js ==========*/
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  /** ========== Get single users; When there was no GithubActions.js ==========*/
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `Bearer ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();

  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  /** ========== Get search users results; When there was no GithubActions.js ==========*/
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   dispatch({
  //     type: "SEARCH_USERS",
  //     payload: items,
  //   });
  // };

  /** ========== Clear search results; When there was no GithubActions.js  ========== */
  // // clear search results
  // const clearUsers = () =>
  // dispatch({
  //   type: "CLEAR_USERS",
  // });

  /** ========== fetch users; When there was no Search functionality ========== */
  // // If we add the function as a dependency in
  // // children's useEffect() dep array, we need to
  // // memoize the function
  // // Get initial users (testing function)
  // const fetchUsers = useCallback(async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // }, []);

  //   const fetchUsers = async () => {
  //     const response = await fetch(`${GITHUB_URL}/users`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     });

  //     const data = await response.json();

  //     dispatch({
  //       type: "GET_USERS",
  //       payload: data,
  //     });
  //   };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
