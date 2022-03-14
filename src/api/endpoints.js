// const PORT = process.env.REACT_APP_API_PORT;

export const GET_VIDEOS = `http://localhost:8080/videos`;
export const GET_VIDEOS_BY_ID = (id) => `http://localhost:8080/videos/${id}`;

export const POST_VIDEO = `http://localhost:8080/videos`;
export const POST_COMMENTS_BY_ID = (id) =>
  `http://localhost:8080/videos/${id}/comments`;

// console.log(process.env.REACT_APP_API_PORT);
