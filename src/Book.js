import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookStatus from './BookStatus'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {

        const {book,updateBookShelf} = this.props
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover book-thumbnail" style={{
                            backgroundImage: `url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : ''})`
                        }}></div>
                        <BookStatus onChangeShelf={updateBookShelf} book={book}/>
                    </div>
                </div>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-authors">{book.authors ? book.authors.join(', '): ''}</p>
            </li>
        )
    }
}
export default Book