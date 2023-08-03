import { clearUserInfoFromLocalStorage } from "../services/localStroage";

export const logOut = () => {
  clearUserInfoFromLocalStorage();
  window.location.href = "/login";
};
