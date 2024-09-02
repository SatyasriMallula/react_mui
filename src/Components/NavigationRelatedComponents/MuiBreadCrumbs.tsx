import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Box, Link } from "@mui/material";
export const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadCrumb"
        separator={<NavigateNext />}
        maxItems={2}
        itemsAfterCollapse={1}
        itemsBeforeCollapse={1}
      >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Accessories</Link>
      </Breadcrumbs>
    </Box>
  );
};
