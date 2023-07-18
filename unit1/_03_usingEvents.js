//How to use events in ReactJS?

//Handling events with React elements is very similar to handling events on DOM elements. They only have some syntax differences.

/*
IN DOM

<button onclick="printValues()">
print
</button>


IN REACT

<button onClick={printValues}>
Print
</button>
*/

//snippet

import "./App.css";

function App(){
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("you clicked on submit function")
    };

    return(
        <>
        <h1>This is React WebApp</h1>
        <form action="">
            <button type="submit" onClick={handleOnSubmit}>
            Submit
            </button>
            </form>
        </>
    )
};

/*
In React.js, the preventDefault method is used to stop the default behavior of an event from occurring. When an event occurs in a web application, it may trigger certain default actions associated with that event. For example, clicking on a link may navigate to a new page, submitting a form may refresh the page, and pressing the Enter key in an input field may also trigger form submission.

By calling event.preventDefault() within an event handler in React, you can prevent these default actions from happening. This method is available on the event object that is passed as an argument to the event handler function.
*/


