import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.include("@")) {
      res.status(422).json({ message: "Invalid Message" });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed UP!" });
    // const filePath = path.join(process.cwd(), "data", "newsletter.json");
    // const fileData = fs.readFileSync(filePath);
    // const data = JSON.parse(fileData);
    // data.push(userEmail);
    // fs.writeFileSync(data);
  }
}

export default handler;
