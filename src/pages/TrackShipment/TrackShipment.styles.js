import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
  display: "flex",
  margin: "20px",
  marginTop: "32px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
  },
});
