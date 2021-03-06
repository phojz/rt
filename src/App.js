import React from 'react'
import './App.css'
class Clock extends React.Component {
  // constructor(props) {
  //   // 构造函数是唯一可以给 this.state 赋值的地方
  //   super(props)
  //   console.log(this)
  //   this.state = {
  //     date: new Date(),
  //     isOn: false
  //   }
  //   // 为了在回调中使用 this ，这个绑定是必要的
  //   // this.handleClick = this.handleClick.bind(this)
  // }
  state = {
    date: new Date(),
    isOn: false,
    val: 0
  }

  // 挂载
  componentDidMount() {
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val)
    this.setState({
      val: this.state.val + 1
    })
    console.log(this.state.val)
    // 两次打印都是0，因为setState是异步的
    this.timer = setInterval(() => {
      this.tick()
    }, 1000);
  }
  // 卸载
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick = () => {
    this.setState(state => ({
      isOn: !state.isOn
    }))
  }

  render() {
    return (
      <div>
        <p>时间：{this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleClick}>
          {this.state.isOn ? 'ON' : 'OFF'}
        </button>
        <p>{this.state.val}</p>
        {
          this.state.val >= 2 &&
          <p>我大于2</p>
        }
      </div>
    )
  }
}

const user = {
  name: '按钮'
}

// 首字母大写问题解释：首先说这个方法返回的是个组件（dom块），
// 首字母大写就是告诉React，我是个组件，而不是字符串
// 小写的话，React会把他当成字符串去处理
function SayHi(props) {
  return <div>Hi! {props.name}</div>
}

// const numbers = [1, 2, 3, 4, 5]
// function NumList(props) {
//   // 错误！这里不需要指定key
//   // const listItems = props.data.map(num => <li key=>{num}</li>)
//   const listItems = props.data.map(num => <li>{num}</li>)
//   return (
//     <ul>{listItems}</ul>
//   )
// }
function ListItem(props) {
  return (
    <li>{props.val}</li>
  )
}
function NumList(props) {
  const numbers = props.data
  const ListItems = numbers.map(
    num =>
      <ListItem key={num} val={num}></ListItem>
  )
  return (
    <ul>{ListItems}</ul>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <div onClick={this.props.getName}>{user.name}</div>
//           <SayHi name={user.name}></SayHi>
//           <Clock></Clock>
//         </header>
//       </div>
//     );
//   }
// }

class InputEl extends React.Component {
  constructor(props) {
    super(props)
  }
  handleInputChange = (e) => {
    let val = e.target.value
    this.props.handleVal(val)
  }
  render() {
    return (
      <div>
        {this.props.type}：
        <input
          type="text"
          value={this.props.val}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}
class ValInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'simple',
      val: 0
    }
  }
  handleSimpleVal = (val) => {
    this.setState({
      type: 'simple',
      val: val
    })
  }
  handleDoubleVal = (val) => {
    this.setState({
      type: 'double',
      val: val
    })
  }
  render() {
    // const type = this.state.type
    const val = this.state.val
    const simpleVal = val
    const doubleVal = val * 2
    return (
      <div>
        <InputEl
          type="simple"
          val={simpleVal}
          handleVal={this.handleSimpleVal}>
        </InputEl>
        <InputEl
          type="double"
          val={doubleVal}
          handleVal={this.handleDoubleVal}>
        </InputEl>
      </div>
    )
  }
}

function Slot(props) {
  const style = {
    background: '#abcdef'
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
function BlueBox() {
  return (
    <Slot>
      你好啊
    </Slot>
  )
}
function NameSlot(props) {
  const redStyle = {
    background: 'red'
  }
  const blueStyle = {
    background: 'blue'
  }
  return (
    <div>
      <div style={redStyle}>{props.top}</div>
      <div style={blueStyle}>{props.bottom}</div>
    </div>
  )
}
function DoubleBox() {
  return (
    <NameSlot
      top={
        <p>我是红色的</p>
      }
      bottom={
        <p>我是蓝色的</p>
      }
    >
    </NameSlot>
  )
}

const NameContext = React.createContext('bbbbbb')

function NameCon() {
  return (
    <div>
      <AName></AName>
    </div>
  )
}

class AName extends React.Component {
  static contextType = NameContext
  render() {
    return (
      <div>{this.context}</div>
    )
  }
}

const numbers = [1, 2, 3, 4, 5]
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* 事件机制 */}
        <div onClick={props.getName}>点我</div>
        {/* 数据传入 */}
        <SayHi name={user.name}></SayHi>
        {/* 页面刷新，数据渲染思想 */}
        <Clock></Clock>
        {/* key值绑定问题 */}
        <NumList data={numbers}></NumList>
        {/* 状态提升，双向数据绑定 */}
        <ValInput></ValInput>
        {/* 包含关系 */}
        <BlueBox></BlueBox>
        {/* 具名插槽 */}
        <DoubleBox></DoubleBox>
        {/* 多级传递数据 */}
        <NameContext.Provider value="aaaaa">
          <NameCon></NameCon>
        </NameContext.Provider>
      </header>
    </div>
  );
}

export default App;
