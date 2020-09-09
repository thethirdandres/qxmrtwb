import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation-section nav navbar h-100">
                <Link to="/" className="navigation-logo   ">
                    <img src={require('../Library/img/main/logo.jpg')} />
                </Link>
                <div className="mr-5 d-none d-md-block">
                    <a className="mr-5 opensans-regular-blue" href="/">Home</a>
                    <a className="mr-5 opensans-regular-blue" href="/store-locator">Store Locator</a>
                    <a className="mr-5 opensans-regular-blue" href="/#products">Products</a>
                    {/* <a className="mr-5 opensans-regular-blue" href="/about">About</a> */}
                    <a className="mr-5 opensans-regular-blue" href="/#contact">Contact</a>
                </div>
            </nav>
        )
    }
}

export default Navigation;