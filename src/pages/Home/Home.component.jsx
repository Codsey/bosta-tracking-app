import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import TrackingInput from "../../components/TrackingInput/TrackingInput.component";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Box sx={{ m: 2 }}>
        <Paper elevation={6}>
          <Box
            sx={{
              p: 3,
            }}
          >
            <Typography variant="h5" component="h5">
              {t("please_enter_your_shipment_number_and_track_your_shipment")}
            </Typography>
            <Grid item xs={12}>
              <TrackingInput />
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default HomePage;
