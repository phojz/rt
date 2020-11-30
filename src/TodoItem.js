import React from 'react'

class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  handleComponentDelete = () => {
    const { handleDelete, index } = this.props
    handleDelete(index)
  }
  render() {
    const { val } = this.props
    return (
      <li
        onClick={this.handleComponentDelete}
      >
        {val}
      </li>
    )
  }
}

export default TodoItem