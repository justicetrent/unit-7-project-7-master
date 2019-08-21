import React, { Component } from 'react';
import Photo from './Photo';

import NoResults from './NoResults'
import apiKey from '../config'

class Photocontainer extends Component {
    //defines the initial state inside of the app class
    constructor() {
        super();
        
        this.state = {
            topicImages: [], //represents a collection of objects that will be changed and be updated by components 
            TopicImage: [],
            Topic1: "New York City",
            Topic2: "Shanghai",
            Topic3: "St. Tropez",
            isLoading: true

        }
    }
    // function that fetches all data from flickr
    fetchData = (query = 'travel') => {
        //console.log(query)
        //inital promise made by fetch once data is completely loaded. 
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
            //The .then() methods are callbacks that takes the promise made by fetch to return their own promises. 
            .then(response => response.json()) // function that takes the response, and returns that same response in json format
            .then(responseData => {         // takes the response that is now in json format and returns 
                this.setState({
                    topicImages: responseData.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log('An error occured trying to fetch this data')
            })


    }
    //  calls the fetch function
    componentDidMount() {
        this.fetchData()
    }
    //updates the url from a previous search term to a new one and displays it on the webpage
    componentDidUpdate(prevProps) {
        if (this.props.match.params.queryString !== prevProps.match.params.queryString) {
            this.fetchData(this.props.match.params.queryString);
        }
    }

    // 
    render() {
        const results = this.state.topicImages;
        let photos;
        if (results.length > 0) {
            photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                key={photo.id}
                alt={photo.title}
            />)
        }
        else {
            photos = <NoResults />
        }
        return (
            <div className="photo-container">
                <h2>Images</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default Photocontainer