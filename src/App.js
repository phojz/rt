import React from 'react'
import logo from './logo.svg';
import './App.css'
const user = {
  name: '按钮'
}
function SayHi(props) {
  return <div>Hi! {props.name}</div>
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div onClick={this.props.getName}>{user.name}</div>
          <SayHi name={user.name}></SayHi>
        </header>
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div onClick={props.getName}>练习1</div>
//       </header>
//     </div>
//   );
// }

export default App;
