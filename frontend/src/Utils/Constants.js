module.exports = {
  BACKEND_SERVER: {
    URL: "http://localhost:9000", // Should have http://
  },
  USER_INFORMATION: {
    USER_ID: localStorage.getItem("userId"),
    USERNAME: localStorage.getItem("userName"),
    USER_TYPE: localStorage.getItem("userType"),
  },
};