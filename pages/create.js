import { useState } from "react";

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    medicalDocuments: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Campaign Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Campaign Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Campaign Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Goal Amount (NGN)"
        value={formData.goalAmount}
        onChange={(e) =>
          setFormData({ ...formData, goalAmount: e.target.value })
        }
      />
      <input
        type="file"
        onChange={(e) =>
          setFormData({ ...formData, medicalDocuments: e.target.files[0] })
        }
      />
      <button type="submit">Create Campaign</button>
    </form>
  );
}
