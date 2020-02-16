import React from "react";
import Navbar from "./navbar";
import Cartproducts from "./cartProducts";

class Carts extends React.Component {
  state = {
    totalPrice: 0
  };

  render() {
    //this.totalPrice();

    console.log(this.props);
    const { error, isLoaded } = this.props.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <Navbar
            numberOfCounters={0}
            handleSearch={this.props.handleSearch}
            numberOfCart={
              this.props.state.itemForFilter.filter(c => c.isCart !== 0).length
            }
          />

          <div className="container">
            <div className="row m-2">
              <div className="col-lg-8">
                <div className="row">
                  {this.props.state.itemForFilter
                    .filter(c => c.isCart !== 0)
                    .map(item => (
                      <Cartproducts
                        key={item.id}
                        cartData={item}
                        handleIncrement={this.props.handleIncrement}
                        handleDecrement={this.props.handleDecrement}
                        handleRemove={this.props.handleRemove}
                      />
                    ))}
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Price Detail</h6>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">
                        Price(
                        {
                          this.props.state.itemForFilter.filter(
                            c => c.isCart !== 0
                          ).length
                        }{" "}
                        Item)
                      </h6>
                    </div>
                    <span className="text-muted">
                      {this.props.state.price.totalPrice}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Discount</h6>
                    </div>
                    <span className="text-muted">
                      {this.props.state.price.totalDiscount}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>
                      {this.props.state.price.totalPrice -
                        this.props.state.price.totalDiscount}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Carts;
