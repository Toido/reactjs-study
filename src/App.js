//import React, { useState } from 'react'; for Hook
import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
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
  state = {
    persons: [
      {id: 'qwer', name: 'Link', age: 17},
      {id: 'dasv', name: 'Zelda', age: 17},
      {id: 'dhdfr', name: 'Ganon', age: 100},
      {id: 'asdqw3q', name: 'Sample Name', age: 50}
    ],
    otherState: 'Some random string',
    showPersons: false
  }

  // buttonClickHandler = (newName) => { //named as switchNameHandler in guide
  //   this.setState({
  //   persons : [
  //     {name: 'Link', age: 117},
  //     {name: 'Zelda', age: 117},
  //     {name: 'Ganon', age: '???'},
  //     {name: newName, age: 50}
  //   ]
  //   })
  // }

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

  render(){

    //Sample inline CSS
    //=======================================
    // const style = {
    //   backgroundColor: 'Green',
    //   color: 'White',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    //========================================

    let displayPerson = null;
    
    if (this.state.showPersons) {
      displayPerson = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age}
                change = {(event) => this.textChangeHandler(event, person.id)}
                key = {person.id}/>
            })}
        </div> 
      );
      
      // style.backgroundColor = 'Red';
      
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // };

      }

        // displayPerson = (
        //   <div>
        //     <Person 
        //       name ={this.state.persons[0].name} 
        //       age ={this.state.persons[0].age}
        //       click = {() => this.buttonClickHandler('Wumpa')}/> {/* Alternative way to pass methods between components */}
        //     <Person 
        //       name ={this.state.persons[1].name} 
        //       age ={this.state.persons[1].age}
        //       click = {this.buttonClickHandler.bind(this, 'Rhodea')}>Hobbies: Researching</Person> {/* Recommended way to pass methods between components */}
        //     <Person 
        //       name ={this.state.persons[2].name} 
        //       age ={this.state.persons[2].age}/>
        //       <Person 
        //       name ={this.state.persons[3].name} 
        //       age ={this.state.persons[3].age}
        //       change = {this.textChangeHandler}/>
        //     </div>
        // );
      
    //}

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    };
    if (this.state.persons.length <=1 ){
      classes.push('bold');
    };

    return(
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className= {classes.join(' ')}>This is really working</p>
          {/* <StyledButton alt = {this.state.showPersons}  */}
          <button className = "button"
            onClick={this.togglePersonDivHandler}>Ganon Wins </button>
          {/* </StyledButton>  */}
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