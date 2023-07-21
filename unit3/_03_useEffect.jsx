//------- useEffect --------------//


//Effect -> the effect is the code you want to execute when something changes in the dependency array

/*
Dependencies ->

This is an array of variables (props or states) which are observed by the hook. 
The effect only executes if one or more of the dependencies change

1. No Dependency array means the effect will execute on every render of teh component i.e whenever any props  or state change.

2. Empty dependency array means the effect only runs on the first render of component.

*/

//cleanup -> this code is run just before the component unmount to do clean up stuf, like removing event listeners, cancelling API requests etc.


//useEffect take two arguments. However the second argument is not compulsory
//1. function
//2. dependency

/*

The first argument is the function that will get executed every time the useEffect hook is called i.e. every time it re-renders.
The second argument i.e. the dependency will make sure that the function executes only when a specific value of the program changes.
This will be an array called the dependency array and it will contain the values which when changes will trigger the execution of the Hook.
*/

import { useEffect } from "react";

useEffect(() => {
    const onload = () => console.log('loaded')
    window.addEventListener("load", onload)
    return () => {
        window.removeEventListener("load", onload)
    }
}, [])

/*

code explaination

When the component is mounted, the useEffect hook runs the callback function passed to it as the first argument. The callback function defines the onload function that logs "loaded" to the console.

The window.addEventListener("load", onload) line attaches an event listener to the "load" event of the window object. This means that when the entire window (including its content) has loaded, the onload function will be called, logging "loaded" to the console.

The return statement inside the useEffect hook defines a cleanup function. This function will be executed when the component is unmounted. In this case, it removes the "load" event listener using window.removeEventListener("load", onload) to avoid potential memory leaks or issues when the component is no longer needed.

Since the dependency array of useEffect is provided as an empty array ([]), this effect will run only once when the component is mounted and perform the cleanup when the component is unmounted.

Overall, this code ensures that the "load" event listener is added when the component is mounted and removed when the component is unmounted, which is a common pattern to avoid memory leaks and maintain clean event handling in React components.

*/