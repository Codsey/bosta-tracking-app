import { trackingActionTypes } from "./tracking.types";

const INITIAL_STATE = {
  trackingData: null,
};

const trackingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case trackingActionTypes.SET_TRACKING_DATA:
      return {
        ...state,
        trackingData: action.payload,
      };
    default:
      return state;
  }
};

export default trackingReducer;
