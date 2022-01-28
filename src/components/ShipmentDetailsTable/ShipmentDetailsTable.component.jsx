import { connect } from "react-redux";

import {
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";

import {
  StyledTable,
  StyledTableHead,
  StyledTableCell,
  ExtraDataText,
} from "./ShipmentDetailsTable.styles";
import { createStructuredSelector } from "reselect";
import { selectTrackingData } from "../../redux/tracking/tracking.selectors";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const getTransitEvent = (type) => {
  const transitEvents = {
    TICKET_CREATED: t("created-step"),
    PACKAGE_RECEIVED: t("received-step"),
    OUT_FOR_DELIVERY: t("out-for-delivery-step"),
    DELIVERED: t("delivered-step"),
    DELIVERED_TO_SENDER: t("delivered-to-sender-step"),
    NOT_YET_SHIPPED: t("not-yet-shipped-step"),
    WAITING_FOR_CUSTOMER_ACTION: t("waiting-for-customer-action-step"),
    RECEIVED_DELIVERY_LOCATION: t("received-delivery-location-step"),
    IN_TRANSIT: t("in-transit-step"),
    DEFAULT: "",
  };
  return transitEvents[type] || transitEvents["DEFAULT"];
};

const parseTransitEventData = (data) => {
  return {
    branch: "Shiekh Zayed",
    date: new Date(data.timestamp).toLocaleDateString(t("date-string")),
    time: new Date(data.timestamp).toLocaleTimeString(t("date-string")),
    data: getTransitEvent(data.state),
    extraData: data.reason,
    hub:
      data.state === "PACKAGE_RECEIVED" ? `${t("location")}: ${data.hub}` : "",
  };
};

const ShipmentDetailsTable = ({ trackingData }) => {
  const { t } = useTranslation();
  if (trackingData) {
    const { TransitEvents } = trackingData;
    const parsedEvents = TransitEvents.map((event) =>
      parseTransitEventData(event)
    );

    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {t("shipment-details")}
        </Typography>
        <TableContainer component={Paper} elevation={1}>
          <StyledTable aria-label="simple table">
            <StyledTableHead>
              <TableRow>
                <StyledTableCell>{t("branch")}</StyledTableCell>
                <StyledTableCell align="left">{t("date")}</StyledTableCell>
                <StyledTableCell align="left">{t("time")}</StyledTableCell>
                <StyledTableCell align="left">{t("details")}</StyledTableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {parsedEvents.map((event, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {event.branch}
                  </StyledTableCell>
                  <StyledTableCell align="left">{event.date}</StyledTableCell>
                  <StyledTableCell align="left">{event.time}</StyledTableCell>
                  <StyledTableCell align="left">
                    {event.data}
                    <ExtraDataText>{event.extraData}</ExtraDataText>
                    <ExtraDataText>{event.hub}</ExtraDataText>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
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

export default connect(mapStateToProps)(ShipmentDetailsTable);
