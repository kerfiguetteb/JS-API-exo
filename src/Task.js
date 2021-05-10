import React, { Component } from 'react'
import './Task.css';

export default class Task extends Component {
    render() {
        return (
            <div className = "task">
                <div className = 'bloc_task'>
               <div>
                <img src={this.props.data.picture.large} alt="" />
                </div>
                   <div>
                <p><strong>{this.props.data.name.first} {this.props.data.name.last}</strong></p>
                <p>{this.props.data.email}</p>
                <p>{this.props.data.dob.date}</p>
                <p>{this.props.data.location.city}</p>
                </div>
                </div>
          
                
            </div>
        )
    }
}
