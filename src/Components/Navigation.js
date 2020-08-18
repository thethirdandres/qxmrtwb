import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation-section" className="nav navbar bg-dark" c="container-fluid fixed-top bg-dark">
                <img className="navigation-logo" src={require('../Library/img/main/logo.jpg')} />
            </nav>
        )
    }
}

export default Navigation;