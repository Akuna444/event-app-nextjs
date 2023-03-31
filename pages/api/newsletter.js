import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Message" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://akuna444:fuMsdwUYBCeWKhqH@cluster0.ex41jje.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const result = await db
      .collection("emails")
      .insertOne({ email: userEmail });
    console.log(result);
    client.close();
    res.status(201).json({ message: "Signed UP!" });
  }
}

export default handler;
