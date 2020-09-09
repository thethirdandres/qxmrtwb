import React from 'react';
import {Link} from 'react-router-dom';


class ToggleNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    
    openNav() {
        document.getElementById("myNav").style.height = "75%";
    }
    
    closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }

    render() {
        return (
        <nav className="toggle-navigation-section d-block d-md-none">
            <div id="myNav" className="overlay">
                <span className="closebtn" onClick={this.closeNav}>&times;</span>
                <div className="overlay-content" onClick={this.closeNav}>
                    <a className="opensans-regular" href="/">Home</a>
                    <a className="opensans-regular" href="/store-locator">Store Locator</a>
                    <a className="opensans-regular" href="/#products">Products</a>
                    {/* <a className="opensans-regular" href="/about">About</a> */}
                    <a className="opensans-regular" href="/#contact">Contact</a>
                </div>
            </div>
            <img className="hamburger-icon" src={require("../Library/img/main/hamburger-icon.png")} onClick={this.openNav} />
        </nav>
        )
    }
}

export default ToggleNavigation;