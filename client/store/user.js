import axios from "axios";

const initialState = false;

const LOG_IN = "LOG_IN";

export const logIn = () => ({
  type: LOG_IN
});

export const checkPassword = password => async dispatch => {
  try {
    const { data } = await axios.get("/api/pass");
    if (password === data) dispatch(logIn());
  } catch (error) {
    console.error(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return true;
    }
    default:
      return state;
  }
};

export default reducer;
