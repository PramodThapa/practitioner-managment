import { clearUserInfoFromLocalStorage } from "../services/localStorageService";

export const logOut = () => {
  clearUserInfoFromLocalStorage();
  window.location.href = "/login";
};
