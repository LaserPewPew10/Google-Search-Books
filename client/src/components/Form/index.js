import React from "react";

const Form = ({ handleInputChange, search, handleFormSubmit }) => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">
            <h2>Search and save books of your interest!</h2>
          </label>
          <input
            className="form-control"
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            placeholder="Search for a Book"
            id="search"
          />
          <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-5">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
