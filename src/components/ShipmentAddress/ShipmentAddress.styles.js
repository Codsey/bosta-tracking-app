import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
  marginLeft: "16px",
  "@media (max-width: 800px)": {
    marginLeft: "0",
    marginTop: "8px",
  },
});

export const AddressBox = styled(Paper)({
  backgroundColor: "#fafafa",
  minHeight: "10px",
  padding: "20px",
});

export const AddressText = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
});
