import React from "react";
import Search from "./search";
import Cart from "./cart";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a onClick={handleClick} className="navbar-brand" href="#">
        <i className="fa fa-star text-warning" aria-hidden="true"></i>
      </a>
      <Search handleSearch={props.handleSearch} />

      <Cart numberOfCart={props.numberOfCart} />
    </nav>
  );
}

export default Navbar;
