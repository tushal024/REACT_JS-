import logo from './logo.svg';
import './App.css';
import Cou from './count';
import { useState } from 'react';


function App() {
 
 let [cc,c1]= useState(0)

 function inc(){
  c1(cc+1)
 }
 

 function dec(){
  c1(cc-1)

  if(cc<=0){
    alert("You Can't Less Than 0")
    c1(0)
  }
 }

// setInterval (() => {
  
//   c1(cc + 1)

// }, 1000);



// function st(){
//   clearInterval(ss)
// }

  return (
    <div className="App">
    <h1 id='fs'>...Counter...</h1>
    <Cou a={cc} />



<button onClick={dec}>-</button>
<button onClick={inc}>+</button>


{/* <button onClick={ }>STOP</button> */}
    
   

    </div>


  );
}

export default App;
