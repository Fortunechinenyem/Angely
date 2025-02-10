import axios from "axios";

export default async function handler(req, res) {
  const { email, amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Payment initialization failed" });
  }
}
