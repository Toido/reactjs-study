import React from 'react';
import styled from 'styled-components';
//import './Person.css';

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 2px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px){
        width: 450px;
}`;


const person = (props) => { 
    // const style = {   
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
return (
    //<div className = "Person" style = {style}>
    <StyledDiv>
        <p onClick = {props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange ={props.change} value = {props.name}></input>
    </StyledDiv>
    //</div>

)
}

export default person;