import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'

class SearchBooks extends Component {

    state={
        books : [],
        query: '',
    }

    search=(query) => {
        BooksAPI.search(query, 20).then((books) => {
            books=(books.error ? ([]) : (books))
            this.setState({books: books})
        })
    }

    updateQuery=(query) => {
        this.setState({query: query.trim()})
    }


    render() {

        const {query,books}=this.state
        var booksList

        if (query.length > 1) {
            this.search(query)
            booksList=books.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ''})`
                            }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors? book.authors.map((author)=> author) : ''}</div>
                </li>
            ))
        }
        else {
            booksList=''
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
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
                        {booksList}
                    </ol>
                </div>



























            </div>
        )
    }
}

export default SearchBooks