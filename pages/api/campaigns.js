export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, description, goalAmount, medicalDocuments } = req.body;

    // Simulating data storage (replace with DB integration)
    console.log("New Campaign Created:", {
      title,
      description,
      goalAmount,
      medicalDocuments,
    });

    return res.status(201).json({ message: "Campaign created successfully!" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
