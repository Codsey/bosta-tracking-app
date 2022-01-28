import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Box,
  TextField,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";
import { setTrackingData } from "../../redux/tracking/tracking.actions";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

const TrackingInput = ({ setTrackingData }) => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const [trackingNo, setTrackingNo] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `http://tracking.bosta.co/shipments/track/${trackingNo}`
      );
      const json = await response.json();
      if (json.error) {
        setLoading(false);
        throw new Error("Invalid Tracking Number");
      }
      setLoading(false);
      setTrackingData(json);
      navigate(`/track-shipment/${trackingNo}`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 1,
        p: 1,
      }}
    >
      <Typography variant="h6" component="h6" mb={1}>
        {t("track-another-shipment")}
      </Typography>
      {errorMessage ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      ) : null}
      <Box
        sx={{
          display: "inline-flex",
        }}
      >
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <Stack direction="row" spacing={1}>
            <TextField
              id="outlined-basic"
              label={t("tracking-no")}
              variant="outlined"
              value={trackingNo}
              onChange={(e) => setTrackingNo(e.target.value)}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              color="error"
              loading={loading}
            >
              <SearchIcon />
              {t("search")}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTrackingData: (trackingData) => dispatch(setTrackingData(trackingData)),
});

export default connect(null, mapDispatchToProps)(TrackingInput);
