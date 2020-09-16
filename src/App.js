import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Shelf from './Shelf.js'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.shelves = [
      {name: 'currentlyReading',
       title: 'Currently Reading'},
      {name: 'read',
       title: 'Read'},
      {name: 'wantToRead',
       title: 'Want to Read'}
    ]
  }

  state = {
    books: [],
    search: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => this.setState({
      books: bookList
    }))
  }

  handleSearchChange = (search) => {
    this.setState(() => ({
      search: search
    }))
  }

  onMove = (book, shelf) => {
    BooksAPI.update(book, shelf)
    if (shelf === 'none') {
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }))
    } else {
      book.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }))
    }
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              this.shelves.map((shelf) => (
                <Shelf books={this.state.books} shelf={shelf} onMove={this.onMove} />
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
      )} />

      <Route path='/search' render={() => (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
      )} />

      </div>
    )
  }
}

export default BooksApp
