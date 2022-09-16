import React from 'react';
// import logo from "./logo.svg";
import "./App.css";

function App() {

  const userTxt = 'Hello World';
  
  return (
    
    <div className="App">
      <p className='par'> The tradition of using the phrase "Hello, world!" as a test message was introduced in the book "The C Programming Language" by Brian Kernighan and Dennis Ritchie, published in 1978. </p>
      <Mytxt txt = {userTxt} id = {1}/>
    </div>
    );
}
export default App;

const Mytxt = (props) => {
  console.log(props);
  return(
    <div>
      <h1>{props.txt}</h1>
    </div>
  )
};