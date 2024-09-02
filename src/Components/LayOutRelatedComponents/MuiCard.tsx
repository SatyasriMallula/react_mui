import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.bb3uJ4HkjBLmcK5Td3UKmwHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="unSplash image"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            React
          </Typography>
          <Typography variant="body1" color="text.secondary">
            React is a JavaScript Libbrary for creating user interfaces Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ea ab odit
            laborum, vero iusto perferendis quam dolorem accusamus consequuntur
            ex architecto aut expedita praesentium temporibus culpa porro dolor
            ducimus inventore?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Share</Button>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
