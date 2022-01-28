import { useLayoutEffect } from "react";
import { connect } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import HomePage from "./pages/Home/Home.component";
import TrackShipment from "./pages/TrackShipment/TrackShipment.component";

import { ThemeProvider } from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import cookies from "js-cookie";
import { setLanguage } from "./redux/language/language.actions";
import RTL from "./components/RTL/RTL.component";

let theme = createTheme({
  typography: {
    fontFamily: ["Cairo", "sans-serif"].join(","),
  },
  direction: cookies.get("i18next") === "ar" ? "rtl" : "ltr",
});
theme = responsiveFontSizes(theme);

const App = ({ setLanguage }) => {
  useLayoutEffect(() => {
    const currentLanguageCode = cookies.get("i18next") || "en";
    setLanguage(currentLanguageCode);
  }, [setLanguage]);
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/track-shipment/:trackingNo"
              element={<TrackShipment />}
            />
          </Routes>
        </div>
      </ThemeProvider>
    </RTL>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (lang) => dispatch(setLanguage(lang)),
});

export default connect(null, mapDispatchToProps)(App);
