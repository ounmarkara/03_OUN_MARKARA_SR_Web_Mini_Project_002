import Cookies from "js-cookie";

export const clearSession = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");

    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName, { path: "/" });
    });
  }
};
