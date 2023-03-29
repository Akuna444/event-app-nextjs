import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.include("@")) {
      res.status(422).json({ message: "Invalid Message" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://akuna444:SB9mPynyww2noO2q@cluster0.ex41jje.mongodb.net/newsletter?retryWrites=true&w=majority"
    );

    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });
    client.close();
    res.status(201).json({ message: "Signed UP!" });
  }
}

export default handler;
