import React from "react";

function Cart(props) {
  return (
    <React.Fragment>
      <a href="/cart">
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
