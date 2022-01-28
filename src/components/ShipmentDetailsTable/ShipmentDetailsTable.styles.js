import { Table, TableCell, TableHead } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTableHead = styled(TableHead)({
  backgroundColor: "#fafafa;",
});

export const StyledTable = styled(Table)({
  minWidth: "650px",
  "@media (max-width: 650px)": {
    minWidth: "450px",
  },
  "@media (max-width: 480px)": {
    minWidth: "0px",
  },
});

export const StyledTableCell = styled(TableCell)({
  fontSize: "15px",
  "@media (max-width: 420px)": {
    padding: "8px",
    fontSize: "14px",
    textAlign: "center",
  },
});

export const ExtraDataText = styled("span")({
  display: "block",
  fontSize: "12px",
  fontWeight: 400,
});
