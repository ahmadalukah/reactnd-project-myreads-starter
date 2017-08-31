import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookStatus extends Component {

    static propTypes={
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const {book,onChangeShelf}=this.props

        return(
            <div className="book-shelf-changer">
                    <select defaultValue={ book.shelf } onChange={(event) => onChangeShelf(event, book)} >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )

    }
}

export default BookStatus