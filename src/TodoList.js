import React from 'react'
import TodoItem from './TodoItem'
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
          <label htmlFor="input-el">请输入内容：</label>
          <input
            id='input-el'
            type="text"
            value={this.state.inputVal}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.createTodoItem()}
        </ul>
      </React.Fragment>
    )
  }
  // handleSubmit(e){
  //   console.log(e,this)
  // }
  handleSubmit = () => {
    // 这里实现了深克隆
    // const listResult = [...this.state.list, this.state.inputVal]
    // this.setState({
    //   list: listResult,
    //   inputVal: ''
    // })
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }))
  }
  handleDelete = (index = 1) => {
    // const listResult = [...this.state.list]
    // listResult.splice(index, 1)
    // this.setState({
    //   list: listResult
    // })
    this.setState((prevState)=>{
      const listResult = [...prevState.list]
      listResult.splice(index, 1)
      return {
        list: listResult  
      }
    })
  }
  handleChange = (e) => {
    // this.setState({
    //   inputVal: e.target.value
    // })
    // 优化
    // 这里是异步模式
    // 所以要提前把value提取出来，在赋值
    const { value } = e.target
    this.setState(()=>({
      inputVal: value
    }))
  }
  createTodoItem = () => {
    return this.state.list.map((item, index) => {
      // 这样写，有问题
      // onClick={this.handleDelete(index) }
      return (
        <TodoItem
          key={index}
          val={item}
          index={index}
          handleDelete={this.handleDelete.bind(this, index)}
        ></TodoItem>
      )
    })
  }
}

export default TodoList