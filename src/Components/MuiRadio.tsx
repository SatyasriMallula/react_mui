import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
export const MuiRadio = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Box width="250px">
      <FormControl>
        <FormLabel id="job-experiance-year">Years of work Experiance</FormLabel>
        <RadioGroup
          name="experiance"
          aria-label="job-experiance-year"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio />}
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="2-4"
            value="2-4"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="4-6"
            value="4-6"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
