import React from "react";
import Counter from "./counter";
import Navbar from "./navbar";
import Sort from "./sort";
import Filter from "./filter";

class Counters extends React.Component {
  render() {
    console.log(this.props);
    const { error, isLoaded, items } = this.props.state;
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
              <Filter onChangeFunction={this.props.onChangeFilter} />
              <div className="col-lg-10">
                <Sort sortBy={this.props.sortData} />
                <div className="row">
                  {items.map(item => (
                    <Counter
                      key={item.id}
                      value={item}
                      addToCart={this.props.addToCart}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Counters;
