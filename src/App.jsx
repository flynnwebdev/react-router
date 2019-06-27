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
    categories: ['food', 'thoughts', 'shopping', 'other'],
    entries: []
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

  addEntry = (categoryId, content) => {
    const newEntries = [...this.state.entries]
    newEntries.push({ categoryId: categoryId, entry: content })
    this.setState({
      entries: newEntries
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/category"><button>New Entry</button></Link>
            <Route exact path="/" render={props => (
              <HomeView categories={this.state.categories} entries={this.state.entries} />
            )} />
            <Route exact path="/category" render={props => (
              <CategorySelectionView categories={this.state.categories} />
            )} />
            <Route exact path="/entry/new/:id" render={props => (
              <NewEntryView {...props} addEntry={this.addEntry} categories={this.state.categories} />
            )} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

