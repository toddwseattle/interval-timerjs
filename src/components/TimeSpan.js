import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { InputLabel, FormControl } from "@material-ui/core";

function TimeSpan({ timespan = 60, onselect }) {
  // let dTime = 60;
  let timeselects = [
    { id: "sec-15", duration: 15, label: "0:15" },
    { id: "sec-30", duration: 30, label: "0:30" },
    { id: "sec-60", duration: 60, label: "1:00" },
    { id: "sec-90", duration: 90, label: "1.30" },
    { id: "sec-120", duration: 120, label: "2:00" },
    { id: "sec-150", duration: 150, label: "2:30" },
    { id: "sec-180", duration: 180, label: "3:00" },
    { id: "sec-240", duration: 240, label: "4:00" },
    { id: "sec-300", duration: 300, label: "5:00" }
  ];

  return (
    <div>
      <FormControl>
        <InputLabel className="label">Time</InputLabel>
        <Select
          value={timespan}
          name="timespan"
          onChange={
            onselect ||
            (() => {
              console.log("default");
            })
          }
        >
          {timeselects.map(ts => (
            <MenuItem key={ts.id} value={ts.duration}>
              {ts.label}
            </MenuItem>
          ))}
        </Select>{" "}
      </FormControl>
    </div>
  );
}

export default TimeSpan;
