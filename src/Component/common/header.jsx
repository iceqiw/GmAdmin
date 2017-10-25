import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * 公共头部
 *
 * @export
 * @className Header
 * @extends {Component}
 */
export class Header extends Component {  //头部标题
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top" >
                    <div className="navbar-custom-menu">
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header