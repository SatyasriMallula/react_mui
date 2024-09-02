import { Stack, Box, Divider } from "@mui/material";
import { MuiBox } from "./MuiBox";
export const MuiStack = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "secondary.main",
        height: "300px",
        margin: "20px",
        // display: "flex",
        color: "white",
        // width: "100px",
        direction: "row",
        p: "16px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
      spacing={2}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      {/* Stack Component */}
      <MuiBox />
      <MuiBox />
    </Stack>
  );
};
