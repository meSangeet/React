//--------------- Life Cycle Of Components-----------//

/*

A React Component can go through four stages of its life as follows. 
 

1. Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
2. Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
3. Updating: Updating is the stage when the state of a component is updated and the application is repainted.
4. Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
*/

//now let us describe each phase and its corresponding functions.

//functions of each phase of lifecycle

//1. initialisation -> In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. Following code snippet describes the initialization process.

class Clock extends React.Component{
    constructor(props){
        //Calling the constructor of
        //parent class React.component
        super(props);

        //setting the initial state
        this.state = {date: new Date()};
    }
};

//2. Mounting -> Mounting is the phase of the lifecycle when the initiallization of the component is completed and the component is mounted on the DOM and rendered for the first time on the web page. 

//react follows a default procedure in the naming conventions of these predefined functions where the functions containing "Will" represents before some specific phase and "Did" represents after the completion of that phase.

//The mounting phase contains two of such predefined functions as described below:

//1. componentWillMount() : This function is invoked right before the component is mounted on the DOM i.e this function gets invoked once before the render() function is executed for the first time.

//2. componentDidMount() : This function is invoked right after the component is mounted on the DOM i.e this function gets invoked once after the render() function is executed for the first time.


//3. updation -> Updation is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key etc. The following are the description of functions that are invoked at different points updation phase.

//a. componentWillReceiveProps() funciton : invoked before a mounted component gets its props reassigned. The function is passed the new set of props which may or may not be identical to the original props. Thus checking is a mandatory step in this regard.

componentWillReceiveProps(newProps){
    if(this.props !== newProps){
        console.log("New Props have been assigned")
        //use this.setState() to rerender the page.
    }
}

//b. setState() -> this is not particularly a lifecycle function and can be invoked explicitly at any instant. This function is used to update the state of a component.

//c. shouldComponentUpdate() -> By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in the case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.


//d. componentWillUpdate() Function: As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

//e. componentDidUpdate() Function: Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.


//4. Unmounting -> This is the final phase of the lifecycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.

//componentWillUnmount() Function : This function is invoked before the component is finally unmounted from the DOM i.e this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.

//First, create a react app and edit your index.js file from the src folder.

import React from 'react'; 
import ReactDOM from 'react-dom'; 

class Test extends React.Component { 
    constructor(props) 
    { 
        super(props); 

        /*
        In React, the line super(props); is used in a class-based component's constructor to call the constructor of the parent class, which is typically React.Component.

        By calling super(props);, you ensure that the parent class's constructor is executed before any code in the child class's constructor. This is necessary because the child class extends the parent class and inherits its properties and methods.
        */
        this.state = { hello : "World!" }; 
    } 

    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 

    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 

    changeState() 
    { 
        this.setState({ hello : "Geek!" }); 
    } 

    render() 
    { 
        return ( 
            <div> 
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
            <h2> 
            <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2> 
            </div>); 
    } 

    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 

    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 

    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 

ReactDOM.render( 
    <Test />, 
    document.getElementById('root')); 

    