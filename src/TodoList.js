import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: [1111111, 22222222, 3333333]
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // 这样写，有问题
              // onClick={this.handleDelete(index) }
              return (
                <li
                  key={index}
                  onClick={this.handleDelete.bind(this,index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
  // handleSubmit(e){
  //   console.log(e,this)
  // }
  handleSubmit = () => {
    // 这里实现了深克隆
    const listResult = [...this.state.list, this.state.inputVal]
    this.setState({
      list: listResult,
      inputVal: ''
    })
  }
  handleDelete = (index) => {
    const listResult = [...this.state.list]
    listResult.splice(index, 1)
    this.setState({
      list: listResult
    })
  }
  handleChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }
}

export default TodoList