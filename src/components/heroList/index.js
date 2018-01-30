import React, {Component} from 'react';
import Hero from '../hero';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const HEROES = gql `query getAllHeroes {
    heroes {
      PrimaryName
    }
  }`;

class HeroList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.data.heroes
                    ? this
                        .props
                        .data
                        .heroes
                        .map(hero => <Hero
                            key={hero.PrimaryName}
                            PrimaryName={hero.PrimaryName}/>)
                    : <div>Loading...</div>
}
            </div>
        );
    }
}
const HeroListWithData = graphql(HEROES)(HeroList);
export default HeroListWithData;