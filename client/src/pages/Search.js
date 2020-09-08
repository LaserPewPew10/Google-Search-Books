import React, { Component } from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    value: "",
  };

  componentDidMount() {
    this.searchBook();
  }

  makeBook = (bookData) => {
    return {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
      googleId: bookData.id,
    };
  };

  searchBook = (query) => {
    API.getBooks(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFromSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <h2>Results</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
