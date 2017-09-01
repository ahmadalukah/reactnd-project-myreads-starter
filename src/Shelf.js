import React, {Component} from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'

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
                            <Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Shelf