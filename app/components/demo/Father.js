import React, { Component } from 'react';
import Person from './Person'
export default class Father extends Component {
      constructor(props){
        super(props)
        this.state={
          name:"",
          age :"",
          persons:[]
        }
      }
      render() {
        const {name,age,persons} = this.state
        return (
          <div>
            <span>姓名:</span><input value={name} name="name" onChange={this._handleChange.bind(this)}></input>
            <span>年龄:</span><input value={age} name="age" onChange={this._handleChange.bind(this)}></input>
            <input type="button" onClick={this._handleClick.bind(this)} value="确认"></input>
            {persons.map((person,index)=>(
              <Person key={index} name={person.name} age={person.age}></Person>
            ))}
          </div>
        )
      }
      _handleChange(event){
        this.setState({[event.target.name]:event.target.value})
      }
      _handleClick(){
        const {name,age} = this.state
        this.setState({
          name:"",
          age :"",
          persons:this.state.persons.concat([{name:name,age:age}])
        })
    
      }
    }