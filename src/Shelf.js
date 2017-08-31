import React, {Component} from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import BookStatus from './BookStatus'

class Shelf extends Component {

    static propTypes = {
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {

        const {title, books, shelf,updateBookShelf} = this.props
        let currentShelf
        currentShelf = books.filter((book) => book.shelf === shelf)
        currentShelf.sort(sortBy('title'))

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentShelf.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ''})`
                                        }}></div>
                                        <BookStatus onChangeShelf={updateBookShelf} book={book}/>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors? book.authors.map((author)=> author) : ''}</div>
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}
export default Shelf