import Link from "next/link";

export default function CampaignCard({ campaign }) {
  const { id, title, description, goalAmount, raisedAmount, imageUrl } =
    campaign;
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-blue-500 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {progress.toFixed(2)}%
            </div>
          </div>
        </div>
        <p className="text-gray-700">
          ₦{raisedAmount.toLocaleString()} raised of ₦
          {goalAmount.toLocaleString()}
        </p>
        <Link
          href={`/campaigns/${id}`}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
}
