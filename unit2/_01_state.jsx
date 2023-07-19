//What is State?

// State is an instance of React Component Class can be defined as an object of a set of observable properties that can control the behaviour of the component.

//In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

//State represents the mutable values that can be changes over time and affect the rendering behaviour of the component. State is typically used for data that can be updated and needs to be reflected in the component's output. eg -> a state can store user input, data fetched from an API, or the current status of a component.


//In React, you can initialize state within a component's constructor using 'this.state' object. The state object can contain any number of key-value pairs, with each key representing a specific piece of data

import React, {Component} from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name:'John',
        };
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <p>Name: {this.state.name}</p>
            </div>
        )
    }
}


//above was for class component

//in Functional components, you can use the 'useState' hook to manage state. This 'useState' hook returns an array with two elements -> the current state value and a function to update the state.

//eg - 

function MyComponent(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');

    return(
        <div>
            <p>Count: {count}</p>
            <p>Name: {name}</p>
        </div>
    );
}

//When you want to update the state, you should never modify the state directly. Instead, you use the provided function to update the state value. React will then re-render the component woth the ipdated state, reflecting the changes in the component's output.
