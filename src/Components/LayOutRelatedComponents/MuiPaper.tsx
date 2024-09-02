import { Paper, Typography } from "@mui/material";
export const MuiPaper = () => {
  return (
    <Paper sx={{ p: "30px" }} elevation={6}>
      <Typography variant="body1">
        Hello How Are you This is Paper component
      </Typography>
      <Typography variant="body2">
        Hello How Are you This is Paper component
      </Typography>
      <Typography variant="body1">
        Hello How Are you This is Paper component
      </Typography>
    </Paper>
  );
};
