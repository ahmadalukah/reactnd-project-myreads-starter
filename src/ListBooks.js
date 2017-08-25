import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class ListBooks extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {

        const {books} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            shelf="currentlyReading"
                            books={books}
                            title="Currently Reading"
                        />
                        <Shelf
                            shelf="wantToRead"
                            books={books}
                            title="Want to Read"
                        />
                        <Shelf
                            shelf="read"
                            books={books}
                            title="Read"
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks