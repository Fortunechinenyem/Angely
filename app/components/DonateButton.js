import { useState } from "react";

export default function DonateButton({ campaignId }) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleDonate = async () => {
    const response = await fetch("/api/paystack", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, amount }),
    });

    const data = await response.json();
    window.location.href = data.data.authorization_url; // Redirect to Paystack
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (NGN)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate Now</button>
    </div>
  );
}
