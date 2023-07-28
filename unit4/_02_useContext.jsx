//----- useContext -------------//

/*
We use React context to manage the state at a global level. Components can get data from the React Context no matter how far down the components tree they are.
*/

import { createContext } from "react";

//context

/*
Context lets the information be passed to the desired component without dragging it through multiple middle components and also when the same information is required by various components. It makes the parent component let certain inforamtion be available to any component in the component tree below it, without the use of repeated props.

The disadvantage of only passing props is that, in situations where the user would want two components state to change together and to do that user will have to remove state from both of them, move it to their closest common parent, and then pass it down to them via props. But the closest common parent could be far away from the component, in the tree, that needs data.
*/

const ThemeContext = createContext();

//createContext returns a context object. Components can read context by passing it to useContext()

//useContext :

//useContext is a hook that lets you read and accept a context

import {useContext} from "react"

//instead of uesContext(ThemeContext) again and again in each component, we define a "custom hook" i.e a function that does this for us called useTheme

const useTheme = () => useContext(ThemeContext);

//let's write a program which will be able to change the colour of the background and the text upon clicking a button.

//the very first thing that we do is creating state variable and intialize the state of the state variable.

const [theme, setTheme] = useState("white");

