import {
  connectDatabase,
  insertDocuments,
  getAllDocuments,
} from "../../../helpers/db-utils";

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database..." });
    return;
  }

  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { name, email, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
      return;
    }

    const newComments = {
      email,
      name,
      text,
      eventId,
    };

    try {
      const result = await insertDocuments(client, "comments", newComments);
      newComments._id = result.insertedId;

      console.log(result);

      res.status(201).json({ message: "Succesful!", comments: newComments });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to insert documents to database..." });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ message: "Successful!", comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch all documents" });
    }
  }

  client.close();
}

export default handler;
