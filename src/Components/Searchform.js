import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


// Search form component
 class Searchform extends Component {
  // intializes state with a property set to an empty string. 
    state = {
      searchValue: ''
    }
  //  fucntion that allows user to search for a topic. 
    onSearchChange = e => {
      this.setState({ searchValue: e.target.value })
    }
    // function that handles the submit of a new search 
    handleSubmit = e => {
      e.preventDefault()
      this.props.history.push(`/title/${this.query.value}`)
      e.currentTarget.reset();
    }

    render() {
      return (
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="search"
              onChange={this.onSearchChange}
              name="search" 
              ref={(input) => this.query = input}
              placeholder="Search"
          />
          <button type="submit" className="search-button"></button>
        </form>
      )
       
    }
}
export default withRouter(Searchform)