import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ShipmentDetailSubtitle = styled(Typography)({
  color: "#777",
  fontSize: "14px",
});

export const ShipmentDetailTitle = styled(Typography)({
  color: "#000",
  fontSize: "18px",
  fontWeight: "800",
});

export const ShipmentStatusTitle = styled(Typography)(({ color }) => ({
  color: `${color}`,
  fontSize: "20px",
  fontWeight: "800",
}));

export const StyledBox = styled(Box)({
  display: "flex",
  padding: "16px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
  },
});
