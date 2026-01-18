import api from "../lib/api";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};

export const signupUser = (data) => {
  return api.post("/auth/signup", data);
};

export const logoutUser = () => {
  return api.post("/auth/logout");
};

export const refreshToken = () => {
  return api.post("/auth/refresh");
};
