import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
    state={
        books : []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
            console.log(books)
        })
    }
  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks books={this.state.books}/>
          )}/>
          <Route
              path="/search"
              render={() => (
                  <SearchBooks
                  />
              )}
          />
      </div>
    )
  }
}

export default BooksApp
