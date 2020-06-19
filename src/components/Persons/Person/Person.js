import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import classes from  './Person.css';
import Aux from '../../../hoc/Auxillary.js';
import withClass from '../../../hoc/withClass';

// const StyledDiv = styled.div`
// width: 60%;
// margin: auto;
// border: 2px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width: 500px){
//         width: 450px;
// }`;


class Person extends Component { 
    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className = {classes.Person}>
            <Aux>
                <p onClick = {this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange ={this.props.change} value = {this.props.name}></input>
            </Aux>
            //</div>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);