import React from 'react';
import {connect} from 'react-redux';
import { setBoard, toggleTile, getSquares } from '../store';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      victorious: false
    }

    this.createBoard = this.createBoard.bind(this);
    this.toggleSquare = this.toggleSquare.bind(this);
    this.checkVictory = this.checkVictory.bind(this);
  }

  async componentDidMount() {
    await this.props.getSquares();
    this.createBoard();
  }

  // Create the bingo board
  createBoard() {
    const board = [];
    const sqCopy = [...this.props.squares];

    while (board.length < 24) {
      const idx = Math.floor(Math.random() * sqCopy.length);
      const element = sqCopy.splice(idx, 1)[0];

      board.push({content: element.content, status: false});
    }

    const temp = board[12];
    board[12] = {content: 'FREE SPACE: Wipe it', status: true};
    board.push(temp);

    this.props.setBoard(board);
  }

  async toggleSquare(event) {
    await this.props.toggleTile(event.target.getAttribute('name'));
    this.checkVictory();
  }

  // %5 gives the column number
  // /5 gives the row number

  // Diagonal conditions are:
  // UL to DR: row = col
  // DL to UR: row + col = 4

  // eslint-disable-next-line complexity
  checkVictory() {
    const rows = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    };

    const cols = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    };

    const diagonals = {
      ULDR: 0,
      DLUR: 0
    };

    for (let i=0; i < this.props.board.length; i++) {
      if (this.props.board[i].status) {
        const row = Math.floor(i / 5);
        const col = i % 5;

        rows[row]++;
        cols[col]++;

        if (row === col) diagonals.ULDR++;
        if (row+col === 4) diagonals.DLUR++;

        if (rows[row] === 5 || cols[col] === 5 
            || diagonals.ULDR === 5 || diagonals.DLUR === 5) {
          this.setState({victorious: true});
          break;
        }
      }
    }
  }

  render() {
    return (
      <div id="board-container">
        <h1>It's Time for RFE Raid Bingo!</h1> 
        <div id="board">
          <div id="bingo-header">BINGO</div>
          {
            this.props.board.length && this.props.board.map((sq, idx) => {
              return (
                <div
                  key={`board${idx}`} 
                  name={sq.content} 
                  className={sq.status ? "board-square toggled" : "board-square"}
                  onClick={this.toggleSquare}>
                    {sq.content}
                </div>
              )
            })
          }
        </div>
        {this.state.victorious && <div>VICTORY!</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  squares: state.square,
  board: state.board
})

const mapDispatchToProps = dispatch => ({
  getSquares: () => dispatch(getSquares()),
  setBoard: board => dispatch(setBoard(board)),
  toggleTile: tile => dispatch(toggleTile(tile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);