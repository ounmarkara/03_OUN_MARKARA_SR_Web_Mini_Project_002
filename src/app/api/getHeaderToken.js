// pages/api/getHeaderToken.js
import headerToken from "@/app/api/headerToken";

export default async function handler(req, res) {
  try {
    const header = await headerToken();

    res.status(200).json({ success: true, data: header });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch header token" });
  }
}
