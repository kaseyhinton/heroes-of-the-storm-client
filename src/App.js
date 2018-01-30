import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeroList from './components/heroList';
import HeroDetail from './components/heroDetail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Heroes Of The Storm</title>
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"/>
          <link
            rel="stylesheet"
            href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"/>
        </Helmet>
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={HeroList}/>
            <Route path="/hero/:heroName" component={HeroDetail}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
