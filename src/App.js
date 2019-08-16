import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';





 import apiKey from './config.js'

//  import Nav from './Components./Nav.js';
// import NotFound from './Components./NotFound.js';
// import Photo from './Components./Photo.js';
// import PhotoList from './Components./PhotoList.js';
// import SearchForm from './Components./SearchForm.js';
// // import Header from './Components./Header.js';
// import Index from './Components./Index.js';


// is the main container for my app 
class App extends Component {
    //defines the initial state inside of the app class
    constructor() {
        super();
        this.state = {
            locations: [], //represents a collection of objects that will be changed and be updated by components 
            searchTopic: "",
            Topic1: "New York City",
            Topic2: "Shanghai",
            Topic3: "St. Tropez",
            TopicImage1:[],
            TopicImage2:[],
            TopicImage3:[],
            isLoading: true,
            
        }
    }
    // //component did mount gets called as soon as a external component gets mounted to the DOM
    // componentDidMount() { 
    //     //inital promise made by fetch once data is completely loaded. 
    //     fetch('')
    //     //The .then() methods are callbacks that takes the promise made by fetch to return their own promises. 
    //     .then(response => response.json) // function that takes the response, and returns that same response in json format
    //     .then(responseData => {         // takes the response that is now in json format and returns 
    //         this.setState();
    //     })
    //      .catch(error => console.log('error message'))
    // }
    render () {
        return(
            <BrowserRouter>
                <div>
                    Topic1={this.state.Topic1}
                    Topic2={this.state.Topic2}
                    Topic3={this.state.Topic3}
                </div>
            </BrowserRouter>
        )
    }
   

}


export default App
