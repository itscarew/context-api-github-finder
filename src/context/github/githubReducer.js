export default (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...action.payload],
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "SET_ONE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_REPOS":
      return {
        ...state,
        repos: [...action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        loading: false,
      };

    case "GET_ERROR":
      return {
        ...state,
        err: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        err: null,
      };

    default:
      return state;
  }
};
