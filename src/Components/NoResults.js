import React, { Component } from 'react'

class NoResults extends Component {
    // renders a error any time someone enters a search that is not valid.
    render() {
        return(
            <div className = "no-reults">
                <h2>There are no results for this search</h2>
            </div>
        )
    }
}
export default NoResults