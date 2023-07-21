//----Controlled Inputs and useRef() Hook--//

/*

The useRef is a hook that allows to directly create a reference to the DOM elemnent in the functional component.
*/

//syntax

const refContainer = useRef(initialValue);

//The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. The .current property could be initialised to the passed argument initialValue eg. useRef(initialValue). The object can persist a value for full lifetime of the component.


import React, {Fragment, useRef} from 'react'

function App(){
    //creating a ref object using useRef  hook

    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value = 'The quick brown fox jumps over the lazy dog';
        focusPoint.current.focus();
        //When the button is clicked, the onClickHandler function is executed. It first sets the value of the referenced <textarea> element to the string 'The quick brown fox jumps over the lazy dog'. Then, it calls focus() on the DOM node using focusPoint.current.focus() to set the focus on the <textarea> element, making it ready for user input or editing.
    };

    return (
        <Fragment>
            <div>
                <button onClick = {onClickHandler}>
                    Action
                </button>

            </div>
            <label>
                Click on the action button
            </label>
            <textarea ref = {focusPoint} />
            
        </Fragment>
    )
}

export default App;

//the ref property is used to create a reference to the underlying DOM node of the <textarea> component.

//Output: In this example, we have a button called ACTION, whenever we click on the button the onClickHandler is getting triggered and it's focusing the textarea with help of useRef hook. The focusPoint is the useRef object which is initialised to null and the value is changing to onClick event. Let's see the output of the above code.

