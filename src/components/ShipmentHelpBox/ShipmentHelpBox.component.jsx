import { useTranslation } from "react-i18next";
import {
  ShipmentHelpPaper,
  ReportingButton,
  ProblemText,
  StyledBox,
} from "./ShipmentHelpBox.styles";

const ShipmentHelpBox = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <ShipmentHelpPaper>
        <ProblemText>{t("shipment-problem")}</ProblemText>
        <ReportingButton variant="contained">
          {t("report-problem")}
        </ReportingButton>
      </ShipmentHelpPaper>
    </StyledBox>
  );
};

export default ShipmentHelpBox;
