"use server";

import { baseUrl } from "./constants";

export const registerService = async (user) => {
  console.log(user);
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};
