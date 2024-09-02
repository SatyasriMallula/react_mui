import { Box } from "@mui/material";
export const MuiBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "100px",
        display: "flex",
        color: "white",
        // width: "100px",
        direction: "row",

        p: "16px",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      Box component
      <h1>Box Component</h1>
      <h1>Hello</h1>
    </Box>
  );
};
