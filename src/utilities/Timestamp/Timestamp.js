// Helper function to convert Unix Timestamps to required format

export const Timestamp = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
