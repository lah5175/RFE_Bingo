import axios from 'axios';

const initialState = [];

// ACTION CONSTANTS

const ALL_SQUARES = 'ALL_SQUARES';
const ADD_SQUARE = 'ADD_SQUARE';

// ACTION CREATORS

const allSquares = squares => ({
  type: ALL_SQUARES,
  squares
})

const addSquare = square => ({
  type: ADD_SQUARE,
  square
})

// THUNKS

export const getSquares = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/squares');
    dispatch(allSquares(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addSquareThunk = square => async dispatch => {
  try {
    const {data} = await axios.post('/api/squares', {content: square});
    if (data) dispatch(addSquare(data));
  } 
  catch (error) {
    console.error(error);
  }
}

// REDUCER

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ALL_SQUARES:
      return action.squares;
    case ADD_SQUARE:
      return [...state, action.square];
    default:
      return state;
  }
}

export default reducer;