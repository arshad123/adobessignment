import React from "react";
import { useHistory } from "react-router-dom";

function Cart(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/cart");
  }
  return (
    <React.Fragment>
      <a onClick={handleClick} href="#">
        <div id="ex4">
          <i className="fa fa-shopping-cart text-white" aria-hidden="true"></i>
          <span className="badge badge-warning" id="lblCartCount">
            {props.numberOfCart}
          </span>
        </div>
      </a>
    </React.Fragment>
  );
}

export default Cart;
