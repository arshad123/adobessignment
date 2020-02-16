import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Filter extends React.Component {
  state = {
    valuess: { min: 100, max: 800 }
  };

  submitApply = () => {
    this.props.onChangeFunction(this.state.valuess);
    console.log(this.state.valuess);
    this.setState({ valuess: this.state.valuess });
    console.log(this.state.valuess);
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-2">
          <div className="row">
            <div className="col-sm-12 m-3">
              <h4 className="my-4">Filter</h4>
              <InputRange
                maxValue={1000}
                minValue={100}
                value={this.state.valuess}
                onChange={valuess => this.setState({ valuess })}
              />
            </div>
            <div className="col-sm-12 text-center">
              <button
                style={{ borderRadius: "40px" }}
                className="btn btn-primary btn-sm"
                onClick={this.submitApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
