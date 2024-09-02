import React, { useState } from "react";
import {
  Box,
  Switch,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
export const MuiSwitch = () => {
  const [value, setValue] = useState(false);
  const [mode, setMode] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => !prev);
  };
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = mode?.indexOf(event.target.value);
    if (index === -1) {
      setMode([...mode, event.target.value]);
    } else {
      setMode(mode.filter((ele) => ele !== event.target.value));
    }
  };
  console.log(value);
  console.log(mode);
  return (
    <Box>
      <FormControl>
        <FormLabel area-lable="Switching">Switching</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={mode.includes("Dark")}
                onChange={handleModeChange}
              />
            }
            label="Dark Mode"
            value="Dark"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Switch
                checked={mode.includes("light")}
                onChange={handleModeChange}
              />
            }
            label="Dark Mode"
            value="light"
          ></FormControlLabel>
          <FormControlLabel
            control={
              <Switch
                checked={mode.includes("blue")}
                onChange={handleModeChange}
              />
            }
            label="Dark Mode"
            value="blue"
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
    </Box>
  );
};
