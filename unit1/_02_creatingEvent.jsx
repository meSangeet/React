//How to create an event in React ?

//When the user interacts with the web application events are fired. That event can be a mouse click, a keypress, or something rare like connecting the battery with a charger. 

//rules to keep in mind when creating events in react

//1. camelCase convention

//2. pass the event as function : in React we pass a function enclosed by curly brackets as event listener or event handler, unlike HTML where we pass the event handler or event listener as a string.

//3. prevent the default : Just returning false  inside the JSX element does not prevent the default behaviour in react. Instead, we have to call the 'prevent default' method directly inside the event handler function.


function component(){
    doSomething(e){
        e.preventDefault();
        //some more response to the event
    }
    return (
        <button onEvent={doSomething}></button>
    );
}

//what is e -> actually e is a synthetic event. This is an object made with a wrapper around the actual event of the browser. This object is cross-browser.


//example app.js

import React from 'react';

function App(){
    function eventHandler(){
        alert('some message');
    }

    return(
        <div className='App'>
            <h1>Welcome</h1>
            <button onClick={eventHandler}>Click</button>
        </div>
    );
}

