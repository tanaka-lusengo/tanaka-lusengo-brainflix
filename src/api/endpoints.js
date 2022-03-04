export const API_KEY = "?api_key=b47e7367-4064-41b1-885f-1019c0882a99";
export const GET_VIDEOS_API_URL = `https://project-2-api.herokuapp.com/videos${API_KEY}`;
export const GET_VIDEOS_BY_ID_API_URL = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}${API_KEY}`;
