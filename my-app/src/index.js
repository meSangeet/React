import React from 'react';
// import ReactDOM from 'react-dom/client';
// above line is outdated and we will be adding a new line as given below.
import {createRoot} from 'react-dom/client';

/*
The above line imports the createRoot function from the react-dom/client module.

the createRoot function is used to create a root for the React application. It is a part of new React concurrent mode introduced in React 18. 
*/
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();