const envPassword = require('../../server/pass');

const initialState = false;

const checkPassword = password => {
  console.log(password)
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