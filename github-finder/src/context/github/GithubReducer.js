export const GithubReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return { ...state, users: action.payload, isLoading: false };
    case "GET_USERS":
      return { ...state, users: action.payload, isLoading: false };
    case "CLEAR_USERS":
      return { ...state, users: [], isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default GithubReducer;
