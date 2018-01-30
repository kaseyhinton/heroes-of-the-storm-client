import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link to={`/hero/${this.props.PrimaryName}`}>
            <div className="heroCard">
                <div className="heroName">{this.props.PrimaryName}</div>
            </div>
            </Link>
        );
    }
}

export default Hero;