import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './TodoList'
function handleGetName() {
  console.log(1211122)
}
ReactDOM.render(
  // <React.StrictMode>
  //   <App getName={handleGetName} />
  //   {<TodoList></TodoList>}
  // </React.StrictMode>,
  <div className='content'>
    <TodoList></TodoList>
  </div>,
  document.getElementById('root'),
  () => {
    console.log('加载完成')
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
