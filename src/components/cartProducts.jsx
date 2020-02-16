import React, { Component } from "react";
class Counter extends Component {
  render() {
    console.log(this.props.cartData);
    return (
      <React.Fragment>
        <div className="row h-90 border overflow-hidden flex-md-row mb-4 shadow-sm col-lg-12">
          <div className="h-90">
            <img width="150px" src={this.props.cartData.img_url} />
          </div>
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0 m-2">{this.props.cartData.name}</h3>
            <div className="card-text mb-auto">
              <div>
                <b>&#x20b9;{this.props.cartData.dPrice}</b>{" "}
                <del className="m-2 text-secondary">
                  {this.props.cartData.price}
                </del>
                <span className="m-2 text-success">
                  {this.props.cartData.discount + " "}%off
                </span>
              </div>
              <a
                href="#"
                onClick={e =>
                  this.props.handleDecrement(e, this.props.cartData)
                }
              >
                <i className="fa fa-minus-circle m-2" aria-hidden="true"></i>
              </a>
              <span className="border">
                <span className="m-2">{this.props.cartData.isCart} </span>
              </span>
              <a
                href="#"
                onClick={e =>
                  this.props.handleIncrement(e, this.props.cartData)
                }
              >
                <i className="fa fa-plus-circle m-2" aria-hidden="true"></i>
              </a>
            </div>
            <a
              href="#"
              onClick={e => this.props.handleRemove(e, this.props.cartData)}
            >
              Remove
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
