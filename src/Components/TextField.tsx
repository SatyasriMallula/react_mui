import React, { useState } from "react";
import {
  IconButton,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Password, VisibilityOff, Visibility } from "@mui/icons-material";
export const TextFieldCom = () => {
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      <Stack direction={"row"} spacing={1}>
        <TextField label="Name" size="small"></TextField>
        <TextField label="Name" variant="outlined" size="small"></TextField>
        <TextField
          label="Name"
          variant="filled"
          size="small"
          color="secondary"
        ></TextField>
        <TextField
          label="Name"
          variant="standard"
          size="small"
          required
        ></TextField>
        <TextField
          label="password"
          helperText="Do not share password with anyone"
          type="password"
        ></TextField>
        <TextField
          label="Read-only"
          InputProps={{ readOnly: true }}
        ></TextField>
        <TextField
          label="password"
          type={!visible ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClick}>
                {visible ? <Visibility /> : <VisibilityOff />}
                {/* {visible ? "yuga" : ""} */}
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </div>
  );
};
