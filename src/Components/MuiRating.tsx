import { Box, Rating } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
export const MuiRating = () => {
  return (
    <Box>
      <Rating
        size="large"
        color="error"
        precision={0.5}
        icon={<Favorite color="error" fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Box>
  );
};
