//------------Axios----------//

/*
In react communicating with the backend server is done via HTTP protocol. If you are a developer then you might have been familiar with the XML Http Request interface and Fetch API. It allows you to fetch data and make HTTP requests.

This one is the common method to communicate with the database. In React there is another method to communicate with the backend server and that requires the installation of a popular library Axios.

Introduction to Axios:

it is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.

1. This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.

2. Using Axios we make API requests in our application. Once the request is made we get the data in return, and then we use this data in our project.

*/

//install Axios library using the following command -> npm install axios


import axios from 'axios'

const getCustomerData = () => {
    axios
    .get('url')
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
};

getCustomerData();

//this was the example to fetch customer's data using Axios


//GET requests with Axios

import React from 'react';
 import axios from 'axios';
 export default class MyList extends React.Component {
  state = {
    blogs: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      const posts = response.data;
      this.setState ({posts});
    })
  }
 render() {
  return (
   <ul>
     {this.state.posts.map (post =>  {post.title} )}
   </ul>
  )}
 }

 //Here we are using axios.get (URL) to get a promise that returns a response object. Returned response is assigned to the post's object. We can also retrieve other information such as status code etc.



 //POST request with Axios
 //create a new component AddPost for POST requests. This request will add a post to the post list.
/* 

code-


 import React from 'react';
 import axios from 'axios';
 export default class AddPost extends React.Component {
    state = {
      postTitle: '',
    }
    handleChange = event => {
      this.setState({ postTitle: event.target.value });
    }
    handleSubmit = event => {
      event.preventDefault();
        const post = {
          postName: this.state.postName
        };
      axios.post(
 `https://jsonplaceholder.typicode.com/posts`, { post })
        .then(res => {
          console.log(res);
          console.log(res.data);
      })
      }
     render() {
          return (
          <div>
            <form onSubmit="{this.handleSubmit}">
              <label>
                Post Name:
                <input type="text" name="name" 
                      onChange="{this.handleChange}" />
              </label>
              <button type="submit">Add</button>
           </form>
         </div>
  )}}

  */