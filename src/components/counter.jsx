import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value.value
  };

  getCount() {
    const { value } = this.props.value;
    return value === 0 ? "Zero" : value;
  }

  render() {
    const { value } = this.props;
    console.log(value);
    return (
      <React.Fragment>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card h-90">
            <img className="card-img-top" src={value.img_url} alt=""></img>
            <div>{value.name}</div>

            <div>
              <b>&#x20b9;{value.dPrice}</b>{" "}
              <del className="m-2 text-secondary">{value.price}</del>
              <span className="m-2 text-success">
                {value.discount + " "}%off
              </span>
            </div>
            <div className="text-center">
              <button
                style={{ borderRadius: "40px" }}
                className={this.getClassess()}
                onClick={() => this.props.addToCart(value)}
                disabled={value.isCart === 0 ? false : "disabled"}
              >
                {value.isCart === 0 ? "Add to cart" : "Added to cart"}
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getClassess() {
    let classess = "btn btn-sm ";
    classess +=
      this.props.value.isCart === 0 ? "btn-warning" : "btn-success disabled";
    console.log(classess);
    return classess;
  }
}

export default Counter;
