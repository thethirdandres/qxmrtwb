import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="" className="nav navbar">
                <Link to="/" onClick={() => this.closeMenu()} className="navigation-logo">
                    <img src={require('../Library/img/main/logo.jpg')} />
                </Link>
            </nav>
        )
    }
}

export default Navigation;