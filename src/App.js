import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';






// import Header from './Components/Header.js'
import Photocontainer from './Components/Photocontainer'
import Searchform from './Components/Searchform'
import Nav from './Components/Nav'



// import NotFound from './Components./NotFound.js';
// import Index from './Components./Index.js';


// is the main container for my app 
class App extends Component {
    //defines the initial state inside of the app class
    constructor() {
        super();
        this.state = {
            topicImages: [], //represents a collection of objects that will be changed and be updated by components 
            TopicImage: [],
            Topic1: "New York City",
            Topic2: "Shanghai",
            Topic3: "St. Tropez",
            // TopicImage1:[],
            // TopicImage2:[],
            // TopicImage3:[],
            isLoading: true

        }
    }


    // performSearch = search => {
    //     fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${search}&extras=url_o`)
    //         .then(response => response.json () )
    //         .then(responseData => {
    //             this.setState ({
    //           TopicImage: search.photos.photo,
    //           loading: false
    //         })
    //       })
    //       .catch(error => {
    //         console.log('Error fetching and parsing data', error);
    //         this.setState({
    //           loading: false
    //         })
    //     });
    // }
    //component did mount gets called as soon as a external component gets mounted to the DOM

    render() {
        return (
            <BrowserRouter>

                <div className='container'>
                    <Searchform onSearch={this.fetchData} />
                    {/* <Header  
                        onSearch={this.performSearch}
                    /> */}
                    <Nav
                        Topic1={this.props.Topic1}
                        Topic2={this.props.Topic2}
                        Topic3={this.props.Topic3}
                    />
                    <Switch>
                        {/* <Route path = '/search/:id' render = {() => <Photocontainer data = {this.state.topicimage}/>}/> */}
                        {/* <Route path={`/${this.state.Topic1}`} render={() => <Photocontainer data={this.state.TopicImage1} title={this.state.Topic1} />} />  */}
                        <Route path="/title/:queryString" component={Photocontainer} />
                        {/* <Route exact path="/" render={() => <Photocontainer />} /> */}
                        <Route exact path="/" component={Photocontainer} />
                        {/* <Photocontainer data = {this.state.topicimage}/> */}
                    </Switch>
                </div>

            </BrowserRouter>
        )
    }


}


export default App
