import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';





 import apiKey from './config.js'
 import Header from './Components/Header.js'
 import Photocontainer from './Components/Photocontainer'


// import NotFound from './Components./NotFound.js';
// import Index from './Components./Index.js';


// is the main container for my app 
class App extends Component {
    //defines the initial state inside of the app class
    constructor() {
        super();
        this.state = {
            topicimage: [], //represents a collection of objects that will be changed and be updated by components 
            
            Topic1: "New York City",
            Topic2: "Shanghai",
            Topic3: "St. Tropez",
            // TopicImage:[],
            // TopicImage2:[],
            // TopicImage3:[],
            isLoading: true
            
        }
    }
    
    fetchData = (query) => {
    //inital promise made by fetch once data is completely loaded. 
     fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
     //The .then() methods are callbacks that takes the promise made by fetch to return their own promises. 
     .then(response => response.json()) // function that takes the response, and returns that same response in json format
     .then(responseData => {         // takes the response that is now in json format and returns 
         this.setState({
             topicimage: responseData.photos.photo,
             loading: false
         })
         
     })
      .catch(error => console.log('An error occured trying to fetch this data'))
    }
    
    // performSearch = search => {
    //     fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${query}&extras=url_o`)
    //       .then(response => response.json {
    //         this.setState({
    //           TopicImage: response.data.photos.photo,
    //           loading: false
    //         });
    //       })
    //       .catch(error => {
    //         console.log('Error fetching and parsing data', error);
    //         this.setState({
    //           loading: false
    //         })
    //     });
    // }
    //component did mount gets called as soon as a external component gets mounted to the DOM
    componentDidMount() { 
       this.fetchData()
    }
    
    render () {
        return(
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <Photocontainer data = {this.state.topicimage}/>
                </div>
            </BrowserRouter>
        )
    }
   

}


export default App
