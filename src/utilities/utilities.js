import moment from "moment";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import "../Components/ComponentItems/Button/Button.scss";

// Helper function to convert Unix Timestamps to required format
const Timestamp = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let m = moment(date, "DD-MM-YYYY").fromNow();
  return m;
};

// Notification function for UploadPage
const handleUpload = (e) => {
  e.preventDefault();

  const swalCustom = Swal.mixin({
    customClass: {
      confirmButton: "sweet-alert-button",
    },
    buttonsStyling: false,
  });

  swalCustom
    .fire({
      title: "Sucess!",
      text: "Video has been uploaded!",
      icon: "success",
      confirmButtonText: "RETURN HOME",
    })
    .then(() => {
      window.location.href = "/";
    });
};

// sort comments in order by timestamp
const sortByTimestamp = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
};

export { Timestamp, handleUpload, sortByTimestamp };
