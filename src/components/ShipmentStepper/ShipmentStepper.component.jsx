import { connect } from "react-redux";
import {
  Box,
  Paper,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Grid,
  CircularProgress,
} from "@mui/material";

import {
  ColorlibConnector,
  ColorlibStepIconRoot,
} from "./ShipmentStepper.styles";

import AddIcon from "@mui/icons-material/Add";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { selectTrackingData } from "../../redux/tracking/tracking.selectors";
import { createStructuredSelector } from "reselect";
import { getStatusColor } from "../../utils";
import { useTranslation } from "react-i18next";

const ColorlibStepIcon = (props, color) => {
  const { active, completed, className } = props;
  const icons = {
    1: <AddIcon />,
    2: <GroupAddIcon />,
    3: <LocalShippingIcon />,
    4: <DoneAllIcon />,
  };

  return (
    <ColorlibStepIconRoot
      color={color}
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

const getSuccessfulSteps = (steps) => {
  let totalSteps = -1;

  if (steps.includes("TICKET_CREATED")) totalSteps++;
  if (steps.includes("PACKAGE_RECEIVED")) totalSteps++;
  if (steps.includes("OUT_FOR_DELIVERY")) totalSteps++;
  if (steps.includes("DELIVERED")) totalSteps++;
  if (steps.includes("DELIVERED_TO_SENDER")) totalSteps--;

  return totalSteps;
};

const ShipmentStepper = ({ trackingData }) => {
  const { t } = useTranslation();
  const steps = [
    t("created-step"),
    t("received-step"),
    t("out-for-delivery-step"),
    t("delivered-step"),
  ];

  if (trackingData) {
    const { TransitEvents } = trackingData;
    const stepperColor = getStatusColor(trackingData.CurrentStatus.state);
    const achievedSteps = getSuccessfulSteps(
      TransitEvents.map((event) => event.state)
    );
    return (
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Paper variant="outlined" square>
          <Box sx={{ display: "flex", p: 2 }}>
            <Stepper
              sx={{ width: "100%" }}
              alternativeLabel
              activeStep={achievedSteps}
              connector={<ColorlibConnector color={stepperColor} />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    StepIconComponent={(e) => ColorlibStepIcon(e, stepperColor)}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Paper>
      </Stack>
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

export default connect(mapStateToProps)(ShipmentStepper);
