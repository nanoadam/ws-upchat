const initialState = {
  email: "",
  token: localStorage.getItem("x-auth-token"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
