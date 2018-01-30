import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
            <Link to="/">HEROES OF THE STORM</Link>
            </div>
        );
    }
}

export default Header;