import React,  { Component } from 'react'

class ShelfChanger extends Component {
    state = {
        value: this.props.shelf
    }

    render() {
        return (
            <select value={this.state.value} onChange={(event) => this.props.onChangeShelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }

}

export default ShelfChanger