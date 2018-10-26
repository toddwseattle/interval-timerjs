import React from "react";
import PropTypes from "prop-types";

function Intervalinput({ intervals, valueChange }) {
  let options = [];
  for (let i = 1; i < 11; i++) {
    options.push(
      <option value={i} key={"int-" + i}>
        {i} Times
      </option>
    );
  }
  return (
    <div>
      <label className="label">Repeat</label>
      <div className="control">
        <div className="select">
          <select
            value={intervals || 2}
            name="inverval"
            onChange={
              valueChange ||
              (() => {
                console.log("default");
              })
            }
          >
            {options}
          </select>
        </div>
      </div>
    </div>
  );
}

Intervalinput.propTypes = {
  intervals: PropTypes.number,
  valueChange: PropTypes.func
};

export default Intervalinput;
