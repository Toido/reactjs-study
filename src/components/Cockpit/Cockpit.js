import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'
import authContext from '../../context/auth-context';

const cockpit = ( props ) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

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
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
            
        toggleBtnRef.current.click();
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
            <button
                ref = {toggleBtnRef} 
                className = {btnClass}
                onClick={props.clicked}>
                    Ganon Wins
            </button>
            {/* <AuthContext.Consumer> */}
                {/* {(context) => <button onClick={context.login}>{context.isAuthenticated ? "Log out" : "Log in"}</button>} */}
            {/* </AuthContext.Consumer> */}
            {<button onClick={authContext.login}>{authContext.isAuthenticated ? "Log out" : "Log in"}</button>}
            {/* </StyledButton>  */}
        </div>
    )
};

export default React.memo(cockpit);