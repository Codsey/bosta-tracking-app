import { useEffect } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { HeaderAppBar, LanguageButton } from "./Header.styls";

// import { ReactComponent as BostaLogoEn } from "../../assets/images/bosta_logo.svg";
import { Link } from "react-router-dom";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import cookies from "js-cookie";
import { setLanguage } from "../../redux/language/language.actions";

const Header = ({ setLanguage }) => {
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "en";

  useEffect(() => {
    document.body.dir = currentLanguageCode === "ar" ? "rtl" : "ltr";
  }, [currentLanguageCode]);

  const handleLanguageChange = () => {
    setLanguage(t("langCode"));
    i18next.changeLanguage(t("langCode"));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, m: 1, ml: 0 }}
          >
            <Link to="/">
              <img
                src={require(`../../assets/images/bosta_logo_${i18next.language}.svg`)}
                alt="logo"
              />
            </Link>
          </Typography>
          <LanguageButton variant="text" onClick={handleLanguageChange}>
            {t("lang")}
          </LanguageButton>
        </Toolbar>
      </HeaderAppBar>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (lang) => dispatch(setLanguage(lang)),
});

export default connect(null, mapDispatchToProps)(Header);
