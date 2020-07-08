import axios from "axios";

const KEY = "AIzaSyDCZ3jN0jgMxOSGpCChuKk0WT8MA7rAj8Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
