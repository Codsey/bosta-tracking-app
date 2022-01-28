import { Button, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
  marginLeft: "16px",
  marginTop: "16px",
  "@media (max-width: 800px)": {
    marginLeft: "0",
    marginBottom: "16px",
  },
});

export const ShipmentHelpPaper = styled(Paper)({
  backgroundColor: "#fafafa",
  minHeight: "40px",
  padding: "20px",
});

export const ReportingButton = styled(Button)({
  backgroundColor: "#ff0000",
  color: "#fff",
  display: "block",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: "#7f0000",
  },
});

export const ProblemText = styled(Typography)({
  fontSize: "16px",
  fontWeight: 800,
  textTransform: "capitalize",
});
