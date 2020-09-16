import React from 'react'
import Book from './Book.js'

function Shelf(props) {
    const { books, shelf, onMove } = props;
    const filteredBooks = books.filter((book) => {
        return book.shelf === shelf.name;
    })

    return (
        <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                      filteredBooks.map((book) => (
                          <Book bookInfo={book} key={book.id} onMove={onMove}/>
                      ))
                  }
                </ol>
              </div>
            </div>
    )
}

export default Shelf;
