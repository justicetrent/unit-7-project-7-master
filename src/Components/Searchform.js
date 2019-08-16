import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



 class Searchform extends Component {
  
    state = {
      searchValue: ''
    };
   
    onSearchChange = e => {
      this.setState({ searchValue: e.target.value });
    };
    
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.state.searchValue);
      this.props.history.push(`/search/${this.searchTag.value}`);
      e.currentTarget.reset();
    };

    render() {

        return (
        <form className="search-form" onSubmit={this.handleSubmit}>;
          <input type="search"
                 onChange={this.onSearchChange}
                 name="search" 
                 ref={(input) => this.searchTag = input}
                 placeholder="Search"
            />;
          <button type="submit" className="search-button"></button>;
        </form>
        )
       
    }
}
export default withRouter(Searchform);