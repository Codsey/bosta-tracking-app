import { Grid, CircularProgress } from "@mui/material";

const ComponentLoader = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="secondary" />
    </Grid>
  );
};

export default ComponentLoader;
