import React from 'react'
import logo from './logo.svg';
import './App.css'

class Clock extends React.Component {
  constructor(props) {
    // 构造函数是唯一可以给 this.state 赋值的地方
    super(props)
    console.log(this)
    this.state = {
      date: new Date(),
      isOn: false
    }
    // 为了在回调中使用 this ，这个绑定是必要的
    this.handleClick = this.handleClick.bind(this)
  }
  // 挂载
  componentDidMount() {
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

  handleClick() {
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

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={props.getName}>点我</div>
        <SayHi name={user.name}></SayHi>
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
