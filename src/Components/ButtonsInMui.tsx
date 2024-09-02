import React, { useState } from "react";
import {
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
export const ButtonsInMui = () => {
  const [state, setState] = useState<String[]>();
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormates: string[]
  ) => {
    setState(updatedFormates);
  };
  console.log(state);
  return (
    <Stack direction={"row"} spacing={2}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">OutLined</Button>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning" size="small">
          Warning
        </Button>
        <Button variant="contained" color="info" size="medium">
          Info
        </Button>
        <Button variant="contained" color="success" size="large">
          Success
        </Button>
        <Button variant="contained" color="success" href="https://google.com">
          Success
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="secondary" startIcon={<Send />}>
          Start Icon
        </Button>
        <Button endIcon={<Send />}>End Icon</Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => alert("button")}
        >
          <Send />
        </Button>
        <IconButton aria-label="send" color="secondary">
          <Send />
        </IconButton>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <ButtonGroup
          variant="contained"
          orientation="horizontal"
          size="small"
          color="secondary"
          aria-label="alignment buttongroup"
        >
          <Button>Text</Button>
          <Button>contained</Button>
          <Button>outlined</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={6}>
        <ToggleButtonGroup onChange={handleChange} value={state}>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
