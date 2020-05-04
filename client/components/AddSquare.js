import React from 'react';

class AddSquare extends React.Component {
  constructor() {
    super();
    this.state={
      content: '',
      chars: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const charLength = event.target.value.length;
    this.setState({
      content: event.target.value,
      chars: charLength
    })
  }

  render() {
    return (
      <div id="add-container">
        <h1>Add New Squares</h1>
        <h2>New events may show up on future randomized boards</h2>

        <form>
          <label htmlFor="content">Content</label>
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange} maxLength={100} />
          <p><i>{this.state.chars}/100 characters used</i></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddSquare;