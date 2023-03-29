function handler(req, res) {
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
      return;
    }

    const newComments = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Succesful!", comments: newComments });
  }

  if (req.method === "GET") {
    const dummyComments = [
      { id: "c1", name: "Akuna", text: "First comment" },
      { id: "c2", name: "Akuti", text: "Second comment" },
    ];

    res.status(200).json({ message: "Successful!", comments: dummyComments });
  }
}

export default handler;
