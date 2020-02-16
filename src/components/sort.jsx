import React from "react";

function Sort(props) {
  console.log("props", props);
  return (
    <div className="container">
      <div className="row">
        <h5>Sort By</h5>{" "}
        <a
          href="javascript:void(0);"
          onClick={() => props.sortBy(1)}
          className="m-2"
        >
          Price -- High Low
        </a>
        <a
          href="javascript:void(0);"
          onClick={() => props.sortBy(2)}
          className="m-2"
        >
          Price -- Low High{" "}
        </a>
        <a
          href="javascript:void(0);"
          onClick={() => props.sortBy(3)}
          className="m-2"
        >
          Discount
        </a>
      </div>
    </div>
  );
}

export default Sort;
