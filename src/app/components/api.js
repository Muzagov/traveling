import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://traveling-team-default-rtdb.europe-west1.firebasedatabase.app/traveling-team-default-rtdb/",
});
