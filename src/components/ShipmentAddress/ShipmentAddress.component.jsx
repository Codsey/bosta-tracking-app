import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AddressBox, AddressText, StyledBox } from "./ShipmentAddress.styles";

const ShipmentAddress = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {t("shipping-address")}
      </Typography>
      <AddressBox>
        <AddressText>128 Beverly Hills, Shiekh Zayed, Giza, Egypt</AddressText>
      </AddressBox>
    </StyledBox>
  );
};

export default ShipmentAddress;
