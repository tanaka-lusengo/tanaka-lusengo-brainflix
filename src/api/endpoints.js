const API_KEY = process.env.REACT_APP_API_KEY;
export const GET_VIDEOS_API_URL = `https://project-2-api.herokuapp.com/videos${API_KEY}`;
export const GET_VIDEOS_BY_ID_API_URL = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}${API_KEY}`;
export const POST_COMMENTS_BY_ID = (id) =>
  `https://project-2-api.herokuapp.com/videos/${id}/comments${API_KEY}`;
