import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  handleSave = (book) => {
    if (
      this.state.savedBooks.map((book) => book.googleId).includes(book.googleId)
    ) {
      API.deleteBook(book.googleId)
        .then((deleteBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book.googleId !== deleteBook.googleId
            ),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div>
        {!this.props.books.length ? (
          <h1 className="text-center">No Results to Display</h1>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className="card mb-3" key={result.googleId}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className="btn badge-pill btn-outline-dark mt-3"
                        >
                          View
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn badge-pill btn-outline-warning mt-3 ml-3"
                        >
                          {this.state.savedBooks
                            .map((book) => book.googleId)
                            .includes(result.googleId)
                            ? "Unsave"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
