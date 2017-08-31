import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import BookStatus from './BookStatus'

class SearchBooks extends Component {

    state={
        books : [],
        query: '',
    }

    search=(query) => {
        BooksAPI.search(query, 20).then((books) => {
            books=(books.error ? ([]) : (books))
            this.setState({books: books})
            console.log(books)
        })
    }

    updateQuery=(query) => {
        this.setState({query: query.trim()})
        this.search(query)
    }


    render() {

        const {query,books}=this.state
        var booksList

        if (query.length > 1) {

            booksList=books.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ''})`
                            }}></div>
                            <BookStatus book={book} bookState={book.shelf} />
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