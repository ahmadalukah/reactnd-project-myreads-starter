import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import BookStatus from './BookStatus'
import Book from './Book'

class SearchBooks extends Component {

    static propTypes = {
        updateBookShelf: PropTypes.func.isRequired,
        OwnedBooks: PropTypes.array.isRequired,

    }

    state={
        books : [],
        query: ''
    }
    // this function searches for books and see if there are similar books from both the result and the owned books
    search=(query) => {
        BooksAPI.search(query, 20).then((books) => {

            books=(books.error ? ([]) : (books))
            books.map((book) => {
                const OwnedBooks = this.props.OwnedBooks
                // Finding the books with same ID from both, the search results and the owned book list
                const myBooks = OwnedBooks.find(ownedBooks => ownedBooks.id === book.id)
                if (myBooks) {
                    book.shelf = myBooks.shelf
                } else {
                    book.shelf = 'none'
                }
            })

            this.setState({books: books})
        }
    )
    }

    updateQuery=(query) => {
        this.setState({query: query.trim()})
        this.search(query)
    }

    render() {

        const {updateBookShelf} = this.props
        const {query}=this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map((book) => (
                                <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks