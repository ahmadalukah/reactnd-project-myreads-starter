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
        })
    }

    updateBookShelf = (event, book) => {
        if (event.target.value) {
            book.shelf = event.target.value
            // update in DB
            BooksAPI.update(book, book.shelf).then(() => {
                // This will change the state of books
                const {books} = this.state
                this.setState({
                    books
                })
                // Rerender the book list, this is helpful in Search
                BooksAPI.getAll().then((books) => {
                    this.setState({books})
                })

                console.log('Shelf changed successfully')
            })
        }
    }



  render() {

    return (
      <div className="app">
          <Route exact path='/' render={() => (
              <ListBooks books={this.state.books} updateBookShelf={this.updateBookShelf}/>
          )}/>
          <Route
              path="/search"
              render={() => (
                  <SearchBooks updateBookShelf={this.updateBookShelf} OwnedBooks={this.state.books}/>
              )}
          />
      </div>
    )
  }
}

export default BooksApp
