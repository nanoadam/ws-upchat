import { GET_MSG } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MSG:
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    default:
      return state;
  }
};
