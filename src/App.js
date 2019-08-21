import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Header from './Components/Header.js'
import Photocontainer from './Components/Photocontainer'
import Searchform from './Components/Searchform'
import Nav from './Components/Nav'

// is the main container for my app 
class App extends Component {
    // Renders the Nav and the Searchform Components
    render() {
        return (
            <BrowserRouter>

                <div className='container'>
                    <Searchform onSearch={this.fetchData} />
                   
                    <Nav
                        Topic1={this.props.Topic1}
                        Topic2={this.props.Topic2}
                        Topic3={this.props.Topic3}
                    />
                    <Switch>
                        <Route path="/title/:queryString" component={Photocontainer} />
                        <Route exact path="/" component={Photocontainer} />
                    </Switch>
                </div>

            </BrowserRouter>
        )
    }


}


export default App
