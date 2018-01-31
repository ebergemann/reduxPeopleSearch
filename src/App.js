import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {INPUT_CHANGE, NAME_CLICK, BACK_CLICK} from './state/types'

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  handleNameClick({target}){
    //console.log(target.id);
    let person = this.props.users.filter(function( obj ) {
      return obj.id === target.id;
    })
    this.props.handleNameClick(person);
  }

  render() {
    return (
      <div className="App">
        {this.props.userPage === undefined &&
        <div>
          <h1>People Search</h1>
        <input type="text" placeholder="Search name" onChange={this.props.handleInputChange} />
        {this.props.input.trim() !== '' &&
          <div className="resultList">
          {
            this.props.users.map((user) => {
              if (user.name.toLowerCase().indexOf(this.props.input.toLowerCase()) !== -1){
                return <p key={user.id} id={user.id} onClick={this.handleNameClick.bind(this)}>{user.name}</p>
              }
            })
          }
        </div>
      }</div>}
        {this.props.userPage !== undefined && 
        <div className="userDisplay">
          
          
          <h2> {this.props.userPage[0].name} </h2>
          <div style={{alignText: 'left'}}>
          <p> City: {this.props.userPage[0].city} </p>
          <p> Industry: {this.props.userPage[0].industry} </p>
          <p> Hobbies: {this.props.userPage[0].hobbies} </p>
          <p> Email: {this.props.userPage[0].email} </p>
          </div>
          <a href="#" onClick={this.props.handleBackClick}>Back</a>
        </div>}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state) 
  return (
    {users: state.users,
    userPage: state.userPage,
    input: state.input
  }
  )
}

const mapDispatchToProps = (dispatch) => {
  return(
    {
      handleInputChange({target}) {
        dispatch({type: INPUT_CHANGE, payload: target.value})
      },
      handleNameClick(person) {
        dispatch({type: NAME_CLICK, payload: person})
      },
      handleBackClick() {
        dispatch({type: BACK_CLICK})
      }

    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
