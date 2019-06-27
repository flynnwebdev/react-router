import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeView from './HomeView';
import CategorySelectionView from './CategorySelectionView';
import NewEntryView from './NewEntryView';
import { builtinModules } from 'module';
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    categories: ['food', 'thoughts', 'shopping', 'other']
  }

  // getView = () => {
  //   switch (this.state.location) {
  //     case "home":
  //       return <HomeView />
  //     case "categorySelection":
  //       return <CategorySelectionView />
  //     case "newEntry":
  //       return <NewEntryView />
  //     default:
  //       return null
  //   }
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">Entry</Link>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/category" render={props => (
              <CategorySelectionView categories={this.state.categories} />
            )} />
            <Route exact path="/entry/new/:id" render={props => (
              <NewEntryView {...props} categories={this.state.categories} />
            )} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

