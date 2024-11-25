import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

  class Count1 extends Component{

    constructor(props){
      super (props)
     
      this.state={
        num:0
      }
        
    }
    dec=()=>{
      this.setState({num:this.state.num-1})
    }

    inc=()=>{
      this.setState({num:this.state.num+1})
        }

    render(){

      return <div>  <h1>{this.state.num}</h1>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      </div> 

    }

  }
 

export default Count1;
