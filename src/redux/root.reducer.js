import { combineReducers } from "redux";
import languageReducer from "./language/language.reducer";

import trackingReducer from "./tracking/tracking.reducer";

const rootReducer = combineReducers({
  tracking: trackingReducer,
  language: languageReducer,
});

export default rootReducer;
