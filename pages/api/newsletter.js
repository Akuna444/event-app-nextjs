import { connectDatabase, insertDocuments } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Message" });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (errors) {
      res.status(500).json({
        message: "Connecting to database failed!",
      });
      return;
    }

    try {
      await insertDocuments(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: "Inserting to database failed!",
      });
      return;
    }
    res.status(201).json({ message: "Signed UP!" });
  }
}

export default handler;
