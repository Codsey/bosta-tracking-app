import { createSelector } from "reselect";

const selectTracking = (state) => state.tracking;

export const selectTrackingData = createSelector(
  [selectTracking],
  (tracking) => tracking.trackingData
);
