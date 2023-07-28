//---------------- useReducer --------//

//1. Alternative to useState hook.
//2. used to manage states of the application. The state reducer pattern enables us to properly manage our state's update based on criteria that the user provides.

/*
useReducer accepts two arguments:

1. Reducer
2. Initial state

and returns the following:

1. Current state
2. Dispatch

Reducer ->

A reducer is a pure function that takes in a current state and objects returning what the user did, called actions and returns a new state.

Initial State: As the name suggests, it is the value that the user has provided in the initial phase of the state.

Current state: It represents the current state.

Dispatch : This is a function used to update the state by calling the action object.
*/

import { useReducer } from "react";

//syntax

const [currentState, dispatch] = useReducer(reducer, initialState);

/*
Here, we are trying to create another counter. Here the currentState will be a variable that will keep a record of the current count of the number. Dispatch will let us change the state in response to interaction i.e. when we click the button, an onClick() event including the dispatch function will occur.
*/

<button onClick={()=>dispatch({type: "increment_number"})}>Increment</button>

/*
React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI.

Here the reducer function takes in two arguments, state and action. The switch statement is generally used, by convention, for carrying out the calculations and returning the next state.
*/

//pure function

function reducer(state, action) {
    switch (action.type){
        case "increment_number":
            return state+1;
        case  "decrement_number":
            return state-1;
        default:
            return state;
    }
}