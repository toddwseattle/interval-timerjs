import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel, FormControl } from "@material-ui/core";

function IntervalInput({ intervals, valueChange }) {
  let options = [];
  for (let i = 1; i < 11; i++) {
    options.push(
      <MenuItem value={i} key={"int-" + i}>
        {i} Times
      </MenuItem>
    );
  }
  return (
    <div>
      <FormControl>
        <InputLabel className="label">Repeat</InputLabel>
        <Select
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
        </Select>
      </FormControl>
    </div>
  );
}

IntervalInput.propTypes = {
  intervals: PropTypes.number,
  valueChange: PropTypes.func
};

export default IntervalInput;
