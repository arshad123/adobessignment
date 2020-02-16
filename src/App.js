import React from "react";
import store from "store";
import { Route } from "react-router-dom";
import Counters from "./components/counters";
import Carts from "./components/carts";

import "react-fontawesome";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    price: { totalPrice: 0, totalDiscount: 0 }
  };

  componentDidMount() {
    const rememberMe = store.get("items");
    if (!rememberMe) {
      fetch("https://api.myjson.com/bins/qzuzi")
        .then(res => res.json())
        .then(
          result => {
            let random = 1;
            result = result.map(v => {
              v.dPrice = v.price - (v.price * v.discount) / 100;
              v.isCart = 0;
              v.img_url =
                "https://i.picsum.photos/id/" + random + "/500/600.jpg";
              random++;
              return v;
            });
            this.setState({
              isLoaded: true,
              items: result,
              itemForFilter: result
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    } else {
      this.setState({
        isLoaded: true,
        items: rememberMe,
        itemForFilter: rememberMe,
        price: store.get("price")
      });
    }
  }

  sortData = sortBy => {
    console.log(sortBy);

    const items = this.state.items;
    items.sort(function(a, b) {
      if (sortBy === 1) {
        return a.dPrice - b.dPrice;
      } else if (sortBy === 2) {
        return b.dPrice - a.dPrice;
      } else {
        return b.discount - a.discount;
      }
    });
    this.setState({ items });
  };

  handleIncrement = (e, increseValue) => {
    e.preventDefault();
    console.log(increseValue);

    const counters = [...this.state.items];
    const index = counters.indexOf(increseValue);
    counters[index] = { ...increseValue };
    counters[index].isCart++;

    let totalPrice = this.state.price.totalPrice;
    totalPrice += counters[index].price;
    console.log(totalPrice);

    let totalDiscount = this.state.price.totalDiscount;
    totalDiscount += counters[index].price - counters[index].dPrice;
    console.log(totalDiscount);

    this.setState({ items: counters });
    this.setState({ itemForFilter: counters });
    store.set("price", {
      totalDiscount: totalDiscount,
      totalPrice: totalPrice
    });
    this.setState({
      price: {
        totalDiscount: totalDiscount,
        totalPrice: totalPrice
      }
    });
    store.set("items", counters);
    store.set("itemForFilter", counters);
  };

  handleDecrement = (e, increseValue) => {
    e.preventDefault();
    console.log(increseValue);

    const counters = [...this.state.items];
    const index = counters.indexOf(increseValue);
    counters[index] = { ...increseValue };
    counters[index].isCart--;

    let totalPrice = this.state.price.totalPrice;
    totalPrice -= counters[index].price;
    console.log(totalPrice);

    let totalDiscount = this.state.price.totalDiscount;
    totalDiscount -= counters[index].price - counters[index].dPrice;
    console.log(totalDiscount);

    this.setState({ items: counters });
    this.setState({ itemForFilter: counters });
    store.set("price", {
      totalDiscount: totalDiscount,
      totalPrice: totalPrice
    });
    this.setState({
      price: {
        totalDiscount: totalDiscount,
        totalPrice: totalPrice
      }
    });
    store.set("items", counters);
    store.set("itemForFilter", counters);
  };

  handleRemove = (e, increseValue) => {
    e.preventDefault();
    const counters = [...this.state.items];
    const index = counters.indexOf(increseValue);

    let totalPrice = this.state.price.totalPrice;
    totalPrice -= counters[index].isCart * counters[index].price;
    console.log(totalPrice);

    let totalDiscount = this.state.price.totalDiscount;
    totalDiscount -=
      counters[index].isCart * (counters[index].price - counters[index].dPrice);
    console.log(totalDiscount);

    counters[index] = { ...increseValue };
    counters[index].isCart = 0;
    this.setState({ items: counters });
    this.setState({ itemForFilter: counters });
    this.setState({
      price: {
        totalDiscount: totalDiscount,
        totalPrice: totalPrice
      }
    });
    store.set("price", {
      totalDiscount: totalDiscount,
      totalPrice: totalPrice
    });
    store.set("items", counters);
    store.set("itemForFilter", counters);
  };

  addToCart = increseValue => {
    const counters = [...this.state.items];
    const index = counters.indexOf(increseValue);
    counters[index] = { ...increseValue };
    counters[index].isCart++;

    let totalPrice = this.state.price.totalPrice;
    totalPrice += counters[index].price;
    this.setState({ totalPrice });
    console.log(totalPrice);

    let totalDiscount = this.state.price.totalDiscount;
    totalDiscount += counters[index].price - counters[index].dPrice;
    console.log(totalDiscount);

    this.setState({ items: counters });
    this.setState({ itemForFilter: counters });
    store.set("price", {
      totalDiscount: totalDiscount,
      totalPrice: totalPrice
    });

    this.setState({
      price: {
        totalDiscount: totalDiscount,
        totalPrice: totalPrice
      }
    });
    store.set("items", counters);
    store.set("itemForFilter", counters);
  };

  handleSearch = searchData => {
    const items = this.state.itemForFilter;
    if (searchData) {
      var filtered = items.filter(result => {
        return result.name.match(new RegExp(`${searchData}`, "gi"));
      });
    } else {
      var filtered = items;
    }
    this.setState({ items: filtered });
  };

  onChangeFilter = filterData => {
    console.log(filterData);
    const items = this.state.itemForFilter;
    const filtered = items.filter(result => {
      return result.dPrice >= filterData.min && result.dPrice <= filterData.max;
    });
    this.setState({ items: filtered });
  };

  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={props => <Counters {...this} />} />
        <Route path="/cart" component={props => <Carts {...this} />} />
      </React.Fragment>
    );
  }
}

export default App;
