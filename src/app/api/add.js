export default async function handler(req, res) {
  if (req.method === "POST") {
    const { workspaceName } = req.body;

    try {
      const newWorkspace = { id: Date.now(), workspaceName, isFavorite: false };

      res.status(200).json({ success: true, data: newWorkspace });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to add workspace" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
