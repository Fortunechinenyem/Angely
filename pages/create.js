import { useState } from "react";

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goalAmount: "",
    medicalDocuments: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.goalAmount) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFormData({
          title: "",
          description: "",
          goalAmount: "",
          medicalDocuments: null,
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Create a Medical Campaign
      </h2>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Campaign Title *"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <textarea
          placeholder="Campaign Description *"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          rows="4"
          required
        ></textarea>

        <input
          type="number"
          placeholder="Goal Amount (NGN) *"
          value={formData.goalAmount}
          onChange={(e) =>
            setFormData({ ...formData, goalAmount: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">
            Upload Medical Documents (optional)
          </label>
          <input
            type="file"
            onChange={(e) =>
              setFormData({
                ...formData,
                medicalDocuments: e.target.files[0]?.name,
              })
            }
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white py-3 rounded-md transition duration-300`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Campaign"}
        </button>
      </form>
    </div>
  );
}
