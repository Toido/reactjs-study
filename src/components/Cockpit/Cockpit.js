import React, { useEffect } from 'react';
import classes from './Cockpit.css';


const cockpit = ( props ) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request..
        /* Sample Cleanup for timers
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        .
        .
        .
        return (
            clearTimeout(timer);
        )
        */
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect'); //Cleanup for useEffect
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2){
        assignedClasses.push(classes.red);
    };
    if (props.personsLength <=1 ){
        assignedClasses.push(classes.bold);
    };

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className= {assignedClasses.join(' ')}>This is really working</p>
            {/* <StyledButton alt = {this.state.showPersons}  */}
            <button className = {btnClass}
                onClick={props.clicked}>Ganon Wins</button>
            {/* </StyledButton>  */}
        </div>
    )
};

export default React.memo(cockpit);