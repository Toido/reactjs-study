//import React, { useState } from 'react'; for Hook
import React, { Component } from 'react';
import classes from './myApp.module.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';
//import styled from 'styled-components';


//Styled-Components Sample
//=================================================
// const StyledButton = styled.button`
//   {
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;

//       &:hover {
//         background-color: ${props => props.alt ? 'pink' : 'lightgreen'};
//         color: black;
//       }
//   `;
//==================================================


class App extends Component {

  constructor (props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'qwer', name: 'Link', age: 17},
      {id: 'dasv', name: 'Zelda', age: 17},
      {id: 'dhdfr', name: 'Ganon', age: 100},
      {id: 'asdqw3q', name: 'Sample Name', age: 50}
    ],
    otherState: 'Some random string',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    //const newPersonState = this.state.persons.slice() //Alternative way to copy the state array (old way)
    const newPersonState = [...this.state.persons] //ES6 version but recommended way to copy state array
    newPersonState.splice(personIndex, 1)
    this.setState({
      persons: newPersonState
    })
  }

  textChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(pInd => {
      return pInd.id === id;
    });

    const oldPerson = {
      ...this.state.persons[personIndex]
    };

    oldPerson.name = event.target.value;

    const newPerson = [...this.state.persons];
    newPerson[personIndex] = oldPerson;

    this.setState({
      persons : newPerson
      })
  }

  togglePersonDivHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  componentDidMount() {
    console.log('[App.js] componendDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  render(){
    console.log('[App.js] render');
    let displayPerson = null;

    if (this.state.showPersons) {
      displayPerson = <Persons 
          clicked = {this.deletePersonHandler}
          changed = {this.textChangeHandler}
          persons = {this.state.persons}
          />
      }

    return(
        <div className={classes.App}>
          <button onClick = {() => {
            this.setState({
              showCockpit: false
            })
          }}> Clear Cockpit </button>
          {this.state.showCockpit ?
          <Cockpit
            title = {this.props.appTitle}
            personsLength = {this.state.persons.length}
            showPersons = {this.state.persons.showPersons}
            clicked = {this.togglePersonDivHandler}
          /> : null
          }
          {displayPerson}
        </div>      
    )
  }
}
export default App;

//=============================================================================
//REACT HOOK Sample
// const app = props => {
//   //render() { Only included for class components

//   const[this.state, setthis.state] = useState({
//     persons : [
//       {name: 'Mark', age: 23},
//       {name: 'Dawn', age: 24},
//       {name: 'Isabelle', age: 4}
//     ]
//   })

//   const [otherState, setOtherState] = useState('Some other string')

//   console.log(this.state, otherState)

//   const buttonClickHandler = () => {
//     // console.log('Was Clicked');
//     //DON'T DO THIS: this.state.persons[0].name = 'Daryl';
//     setthis.state({
//       persons: [
//         {name: 'Daryl', age: 23},
//         {name: 'Dawn', age: 24},
//         {name: 'Isabelle', age: 44}
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working</p>
//         <button onClick={buttonClickHandler}>Switch Name</button>
//         <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}/>
//         <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}>Hobbies: Sleeping</Person>
//         <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}/>
//       </div>
//     );

//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
//   //}
// }

//export default app;

// state = {
//   persons : [
//     {name: 'Mark', age: 23},
//     {name: 'Dawn', age: 24},
//     {name: 'Isabelle', age: 4}
//   ]
// }

// buttonClickHandler = () => {
//   // console.log('Was Clicked');
//   //DON'T DO THIS: this.state.persons[0].name = 'Daryl';
//   this.state({
//     persons: [
//       {name: 'Daryl', age: 23},
//       {name: 'Dawn', age: 24},
//       {name: 'Isabelle', age: 44}
//     ]
//   })
// }