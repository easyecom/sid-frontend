export const addToken = (token) => {
  localStorage.setItem("@token", JSON.stringify(token));
};

export const getToken = () => {
  JSON.parse(localStorage.getItem("@token") || "");
};
