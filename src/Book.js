import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    state = {
        currentShelf: this.props.bookInfo.shelf
    }

    handleChangeShelf = (change) => {
        console.log(change, this.state.currentShelf)
        if (change !== this.state.currentShelf) {
            // console.log(`Changing shelf from ${this.state.currentShelf} to ${change}`)
            this.setState(() => ({
                currentShelf: change
            }))

            this.props.onMove(this.props.bookInfo, change)

        }
    }

    render() {
        const { bookInfo } = this.props;
        let authors = "";
        for (let i = 0; i < bookInfo.authors.length; i++) {
            authors += bookInfo.authors[i] + ", ";
        }
        authors = authors.slice(0, -2)
        return (
            <li key={bookInfo.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${
                        bookInfo.imageLinks.thumbnail
                    })` }}></div>
                        <div className="book-shelf-changer">
                            <ShelfChanger shelf={this.props.bookInfo.shelf} onChangeShelf={this.handleChangeShelf}/>
                        </div>
                    </div>
                <div className="book-title">{bookInfo.title}</div>
                <div className="book-authors">
                    {authors}
                </div>
            </div>
        </li>
        )
    }

}

export default Book;