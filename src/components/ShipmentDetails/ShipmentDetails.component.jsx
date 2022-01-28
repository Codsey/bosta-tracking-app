import { connect } from "react-redux";
import { Box, Paper, CircularProgress, Grid } from "@mui/material";

import {
  ShipmentDetailSubtitle,
  ShipmentDetailTitle,
  ShipmentStatusTitle,
  StyledBox,
} from "./ShipmentDetails.styles";

import ShipmentDetailsItem from "../ShipmentDetailsItem/ShipmentDetailsItem.component";
import { createStructuredSelector } from "reselect";
import { selectTrackingData } from "../../redux/tracking/tracking.selectors";
import { getStatusColor } from "../../utils";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const getStatusMessage = (status) => {
  const events = {
    TICKET_CREATED: t("created"),
    PACKAGE_RECEIVED: t("received"),
    OUT_FOR_DELIVERY: t("out-for-delivery"),
    DELIVERED: t("delivered"),
    DELIVERED_TO_SENDER: t("delivered-to-sender"),
    NOT_YET_SHIPPED: t("not-yet-shipped"),
    WAITING_FOR_CUSTOMER_ACTION: t("waiting-for-customer-action"),
    RECEIVED_DELIVERY_LOCATION: t("received-delivery-location"),
    IN_TRANSIT: t("in-transit"),
    DEFAULT: "",
  };
  return events[status] || events["DEFAULT"];
};

const ShipmentDetails = ({ trackingData }) => {
  const { t } = useTranslation();
  if (trackingData) {
    const color = getStatusColor(trackingData.CurrentStatus.state);
    return (
      <Box>
        <Paper variant="outlined" square>
          <StyledBox>
            <ShipmentDetailsItem>
              <ShipmentDetailSubtitle>
                {t("tracking-no")} {trackingData.TrackingNumber}
              </ShipmentDetailSubtitle>
              <ShipmentStatusTitle color={color}>
                {getStatusMessage(trackingData.CurrentStatus.state)}
              </ShipmentStatusTitle>
            </ShipmentDetailsItem>
            <ShipmentDetailsItem>
              <ShipmentDetailSubtitle>
                {t("last-update")}
              </ShipmentDetailSubtitle>
              <ShipmentDetailTitle>
                {new Date(
                  trackingData.TransitEvents[
                    trackingData.TransitEvents.length - 1
                  ].timestamp
                ).toLocaleString(t("date-string"))}
              </ShipmentDetailTitle>
            </ShipmentDetailsItem>
            <ShipmentDetailsItem>
              <ShipmentDetailSubtitle>
                {t("seller-name")}
              </ShipmentDetailSubtitle>
              <ShipmentDetailTitle>Souq.com</ShipmentDetailTitle>
            </ShipmentDetailsItem>
            <ShipmentDetailsItem>
              <ShipmentDetailSubtitle>
                {t("estimated-delivery-date")}
              </ShipmentDetailSubtitle>
              <ShipmentDetailTitle>
                {trackingData.PromisedDate
                  ? new Date(trackingData.PromisedDate).toLocaleString(
                      t("date-string")
                    )
                  : t("date-not-provided")}
              </ShipmentDetailTitle>
            </ShipmentDetailsItem>
          </StyledBox>
        </Paper>
      </Box>
    );
  } else {
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
  }
};

const mapStateToProps = createStructuredSelector({
  trackingData: selectTrackingData,
});

export default connect(mapStateToProps)(ShipmentDetails);
