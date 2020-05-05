const initialState = [];

// ACTION CONSTANTS

const SET_BOARD = 'SET_BOARD';
const TOGGLE_TILE = 'TOGGLE_TILE';

// ACTION CREATORS

export const setBoard = board => ({
  type: SET_BOARD,
  board
})

export const toggleTile = tile => ({
  type: TOGGLE_TILE,
  tile
})

// REDUCER

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return action.board;
    case TOGGLE_TILE: {
      const stateCopy = state.map(sq => {
        if (sq.content === action.tile) {
          return {content: sq.content, status: !sq.status};
        }
        else return sq;
      })

      return stateCopy;
    }
    default:
      return state;
  }
}

export default reducer;