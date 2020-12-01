import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  handleComponentDelete = () => {
    const { handleDelete, index } = this.props
    handleDelete(index)
  }
  render() {
    const { val, test } = this.props
    return (
      <li
        // dangerouslySetInnerHTML={{ __html: val }}
        onClick={this.handleComponentDelete}
      >
        {test}: {val}
      </li>
    )
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  val: PropTypes.string,
  handleDelete: PropTypes.func
}
TodoItem.defaultProps = {
  test: 'val'
}
export default TodoItem