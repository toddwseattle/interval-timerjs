import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel, FormControl } from "@material-ui/core";

function BreakTimeInput({ bTime = 10, onselect }) {
  let breakSelects = [
    { id: "bks-0", duration: 0, label: "0:00" },
    { id: "bks-05", duration: 5, label: "0:05" },
    { id: "bks-10", duration: 10, label: "0:10" },
    { id: "bks-15", duration: 15, label: "0:15" },
    { id: "bks-30", duration: 30, label: "0:30" },
    { id: "bks-60", duration: 60, label: "1:00" },
    { id: "bks-75", duration: 75, label: "1:15" },
    { id: "bks-90", duration: 90, label: "1:30" },
    { id: "bks-120", duration: 120, label: "2:00" }
  ];
  return (
    <div>
      <FormControl>
        <InputLabel className="label">Break Between</InputLabel>
        <Select
          value={bTime}
          name="btime"
          onChange={
            onselect ||
            (() => {
              console.log("default");
            })
          }
        >
          {breakSelects.map(ts => (
            <MenuItem key={ts.id} value={ts.duration}>
              {ts.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

BreakTimeInput.propTypes = {
  bTime: PropTypes.number,
  onselect: PropTypes.func.isRequired
};

export default BreakTimeInput;
