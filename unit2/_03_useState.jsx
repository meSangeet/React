//useState

import {useState} from 'react';

//adding state to a component
//const [something, setSomething] = useState(initial state)

//this something is called state variable

const [count, setCount] = useState(0);

//above line does array destructuring

//following code gives example of how the set function works. We call the state function and update it with next state.

const incrementing = () => {
    //counter state is incremented

    setCount(count + 1);
}

//here the initial state of the count was zero. By creating a function incrementing we update the state of the state variable and set the count as count + 1.

//Rendering a state


/*
A change in state triggers a render. Rendering takes place in the following ways.

1. React calls the component
2. In the initial render, React calls the   root component.
3. After the initial render, for the subsequent renders, React calls the function component that resulted in a state change/update which triggered the render
*/