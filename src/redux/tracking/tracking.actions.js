import { trackingActionTypes } from "./tracking.types";

export const setTrackingData = (trackingData) => ({
  type: trackingActionTypes.SET_TRACKING_DATA,
  payload: trackingData,
});
