import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)({
  padding: "8px 48px",
  margin: "24px",
  "@media (max-width: 980px)": {
    padding: "8px 24px",
    margin: "20px",
  },
  "@media (max-width: 820px)": {
    padding: "0",
    margin: "20px",
  },
  "@media (max-width: 800px)": {
    margin: "0",
  },
});
