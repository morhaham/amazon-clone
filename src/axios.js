import axios from "axios";

const instance = axios.create({
  // The API URL (cloud function from firebase)
  // local:   "http://localhost:3601/clone-968fd/us-central1/api"
  baseURL: "https://us-central1-clone-968fd.cloudfunctions.net/api",
});

export default instance;
