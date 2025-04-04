// utils/logoutAction.js
"use server";

import Cookies from "js-cookie";

export const logoutAction = async () => {
  try {
    const cookiesStore = Cookies();

    cookiesStore.delete("next-auth.session-token", { path: "/" });

    console.log("Session token deleted successfully");
  } catch (error) {
    console.error("Error during logout:", error.message);
  }
};
