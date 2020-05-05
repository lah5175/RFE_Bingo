import React from 'react';
import {connect} from 'react-redux';
import { getSquares, addSquareThunk } from '../store';

class AddSquare extends React.Component {
  constructor() {
    super();
    this.state={
      content: '',
      chars: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSquares();
  }

  handleChange(event) {
    const charLength = event.target.value.length;
    this.setState({
      content: event.target.value,
      chars: charLength
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addSquare(this.state.content);
    this.setState({
      content: '',
      chars: 0
    })
  }

  render() {
    return (
      <div id="add-container">
        <h1>Add New Squares</h1>

        <form id="add-square-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="content">Content</label>
            <input type="text" name="content" value={this.state.content} onChange={this.handleChange} maxLength={50} />
            <p><i>{this.state.chars}/50 characters used</i></p>
          </div>
          <button type="submit">Submit</button>
        </form>

        <h2>Current Squares {this.props.squares.length && <span>({this.props.squares.length})</span>}</h2>

        <div id="all-squares">
          {
            this.props.squares.length
            ? this.props.squares.map((square, idx) => <div key={`s${idx}`}><p>{square.content}</p></div>)
            : <div>No content</div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  squares: state.square
})

const mapDispatchToProps = dispatch => ({
  getSquares: () => dispatch(getSquares()),
  addSquare: square => dispatch(addSquareThunk(square))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSquare);