import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Box } from "@mui/material";
import ShipmentDetails from "../../components/ShipmentDetails/ShipmentDetails.component";
import ShipmentStepper from "../../components/ShipmentStepper/ShipmentStepper.component";
import ShipmentDetailsTable from "../../components/ShipmentDetailsTable/ShipmentDetailsTable.component";
import ShipmentAddress from "../../components/ShipmentAddress/ShipmentAddress.component";
import ShipmentHelpBox from "../../components/ShipmentHelpBox/ShipmentHelpBox.component";
import { StyledBox } from "./TrackShipment.styles";
import { setTrackingData } from "../../redux/tracking/tracking.actions";
import { useNavigate, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectTrackingData } from "../../redux/tracking/tracking.selectors";

const TrackShipment = ({ trackingData, setTrackingData }) => {
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await fetch(
        `http://tracking.bosta.co/shipments/track/${params.trackingNo}`
      );
      const json = await response.json();
      if (json.error) {
        return navigate("/");
      }
      setTrackingData(json);
    };
    if (!trackingData) {
      fetchTrackingData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box sx={{ maxWidth: "100%", mt: 6 }}>
        <ShipmentDetails />
        <ShipmentStepper />
      </Box>
      <StyledBox sx={{ display: "flex", mt: 4 }}>
        <ShipmentDetailsTable />
        <Box sx={{ flexDirection: "column" }}>
          <ShipmentAddress />
          <ShipmentHelpBox />
        </Box>
      </StyledBox>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTrackingData: (trackingData) => dispatch(setTrackingData(trackingData)),
});

const mapStateToProps = createStructuredSelector({
  trackingData: selectTrackingData,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShipment);
