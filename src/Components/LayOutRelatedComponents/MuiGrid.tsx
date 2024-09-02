import { Box, Grid } from "@mui/material";

export const MuiGrid = () => {
  return (
    <Grid container my={4} rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Box p={2} bgcolor="secondary.main">
          item1
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="secondary.main">
          item2
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="secondary.main">
          item3
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2} bgcolor="secondary.main">
          item4
        </Box>
      </Grid>
    </Grid>
  );
};
