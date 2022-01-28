import { connect } from "react-redux";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { createStructuredSelector } from "reselect";
import { selectLanguageCode } from "../../redux/language/language.selectors";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const RTL = (props) => {
  if (props.langCode === "ar") {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
  } else {
    return <>{props.children}</>;
  }
};

const mapStateToProps = createStructuredSelector({
  langCode: selectLanguageCode,
});

export default connect(mapStateToProps)(RTL);
