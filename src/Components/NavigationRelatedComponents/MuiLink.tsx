import { Stack, Link } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link underline="none" href="#" variant="h6" color="secondary">
        link
      </Link>
    </Stack>
  );
};
