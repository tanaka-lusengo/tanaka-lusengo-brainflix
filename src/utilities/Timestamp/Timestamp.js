// Helper function to convert Unix Timestamps to required format

import moment from "moment";

export const Timestamp = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let m = moment(date, "DD-MM-YYYY").fromNow();
  return m;
};
