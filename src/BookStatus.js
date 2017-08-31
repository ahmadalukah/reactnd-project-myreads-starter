import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'


class BookStatus extends Component {

    static PropTypes={
        books: PropTypes.array.isRequired,
        book: PropTypes.array.isRequired
    }

    state = {
        query: '',
        books : []
    }

    fetchMyBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
            console.log(books)
        })
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})

        BooksAPI.update(this.props.book, query).then(() => {
            console.log('done')
            this.fetchMyBooks()
        })
    }

    render() {
        const {book}=this.props


        return(
            <div className="book-shelf-changer">
                <select defaultValue={ book.shelf } onChange={(event) => this.updateQuery(event.target.value)}>
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