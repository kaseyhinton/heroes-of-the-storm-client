import React, {Component} from 'react';
import './index.css';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const currentHero = gql `query getHero($PrimaryName: String!) {
    hero(PrimaryName: $PrimaryName) {
      PrimaryName
      ImageURL
      Group
      SubGroup
    }
  }`;

class HeroDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    componentDidMount() {
        console.log(this.props.match.params.heroName);
    }

    render() {
        return (this.props.data.hero
            ? <div className="heroDetail">
                    <img alt="Hero" src={this.props.data.hero.ImageURL}/>
                    <div className="heroDetailInfo">
                        <div className="heroDetailName">{this.props.data.hero.PrimaryName}</div>
                        <div className="heroDetailGroup">{this.props.data.hero.Group}</div>
                        <div className="heroDetailSubGroup">{this.props.data.hero.SubGroup}</div>
                    </div>
                </div>
            : <div>Loading...</div>);
    }
}

const HeroDetailWithData = graphql(currentHero, {
    options: ({match}) => ({
        variables: {
            PrimaryName: match.params.heroName
        }
    })
})(HeroDetail);
export default HeroDetailWithData;
