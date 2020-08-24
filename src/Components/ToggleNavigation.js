import React from 'react';
import {Link} from 'react-router-dom';
import {fallDown as Menu} from 'react-burger-menu';

class ToggleNavigation extends React.Component {
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
        <div id="outer-container" className="">
            <Menu className={'toggle-navigation-wrapper'} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right disableAutoFocus width={'100%'} onStateChange={(state) => this.handleStateChange(state)}>
                <div id="page-wrap">
                    <div><a onClick={() => this.closeMenu()} href="/">HOME</a></div>
                    <div><a onClick={() => this.closeMenu()} href="/store-locator">STORE LOCATOR</a></div>
                    <div><a onClick={() => this.closeMenu()} href="/products">PRODUCTS</a></div>
                    <div><a onClick={() => this.closeMenu()} href="/about">ABOUT</a></div>
                    <div><a onClick={() => this.closeMenu()} href="/contact">CONTACT</a></div>
                </div>
            </Menu>
        </div>
        )
    }
}

export default ToggleNavigation;