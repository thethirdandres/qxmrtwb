import React from 'react';
import {Link} from 'react-router-dom';
import {fallDown as Menu} from 'react-burger-menu';

class Navigation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu() {
        this.setState({menuOpen: false})
    }

    toggleMenu() {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }


    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
        <div id="outer-container" className="navigation-section">
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} width={'100%'} >
                <Link to="/" onClick={() => this.closeMenu()}>
                    <img className="navigation-logo" src={require('../Library/img/main/logo.jpg')} />
                </Link>

                <nav id="page-wrap" className="nav navbar bg-dark" c="container-fluid fixed-top bg-dark">
                    
                </nav>
            </Menu>
        </div>
        )
    }
}

export default Navigation;