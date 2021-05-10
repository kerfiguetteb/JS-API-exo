import './App.css';
import React, { Component } from 'react'
import axios from 'axios';
import Task from './Task';
import './Task.css';

export default class App extends Component {

  state = {
    tableau : []
  }
componentDidMount = () => {
  this.getName();
}
  getName = () => {
    axios.get('https://randomuser.me/api/?results=9')
    .then(rep => {
      console.log(rep.data.results)
      this.setState({
        tableau : rep.data.results
      })
    })
  }

 
  render() {
    const User = this.state.tableau.map(i => {
      return(
       <li> <Task data = {i}/>
            
      </li>
           )
    }) 

    return (
      <div>
        <ul className = 'ul'>
      {User}
      </ul>
      <div className = 'button'>
      <button onClick={this.getName}>Changer User</button>
      </div>
      </div>
    )
  }
}
