import { clearUserInfoFromLocalStorage } from "../services/localStorage";

export const logOut = () => {
  clearUserInfoFromLocalStorage();
  window.location.href = "/login";
};
