import React from "react";

class Search extends React.Component {
  state = {
    sreachValue: ""
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.sreachValue);
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ sreachValue: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSearch}
        className="form-inline my-2 my-lg-0 ml-auto"
      >
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
            value={this.state.sreachValue}
          ></input>
          <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3">
            <i className="fa fa-search text-white"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
