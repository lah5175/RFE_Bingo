const {SECRET_PASSWORD} = require('../../secrets');

const initialState = false;

const checkPassword = password => {
  const envPassword = process.env.PASSWORD ? process.env.PASSWORD : SECRET_PASSWORD;
  return password === envPassword;
}

const LOG_IN = 'LOG_IN';

export const logIn = password => ({
  type: LOG_IN,
  password
})

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return checkPassword(action.password);
    }
    default:
      return state;
  }
}

export default reducer;