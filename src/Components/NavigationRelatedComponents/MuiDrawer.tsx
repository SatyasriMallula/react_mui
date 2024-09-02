import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
export const MuiDrawer = () => {
  const [drawer, setIsDrawer] = useState(false);
  return (
    <Box>
      <IconButton onClick={() => setIsDrawer(true)} edge="start" size="large">
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={drawer} onClose={() => setIsDrawer(false)}>
        <Box width="300px" textAlign="center">
          <Typography variant="h5"> Side Nav</Typography>
        </Box>
        <Box>
          <Typography variant="h3"> Drawer Component</Typography>
        </Box>
      </Drawer>
    </Box>
  );
};
