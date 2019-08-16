//imports for React and react-router-dom
import React, { Component } from 'react';
import Nav from './Nav'
//import { NavLink } from 'react-router-dom';
//import Route from 'react-router-dom'
//import { withRouter } from 'react-router-dom'


//imports for components 
import Searchform from './Searchform';


class Header extends Component {
  
    render() {
        return(
        <header>
            <Searchform onSearch={this.props.onSearch} />
            <Nav />
        </header>
        )
    }
}
//         const { locations } = props
//         return (
//             <Header />
//                 <h1></h1>
           
//         )
//     </BrowserRouter>
// }

export default Header;