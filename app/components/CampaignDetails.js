export default function CampaignDetails({ campaign }) {
  const { title, description, goalAmount, raisedAmount, imageUrl } = campaign;
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6 mb-4">{title}</h1>
      <p className="text-gray-700 mb-6">{description}</p>

      <div className="mb-6">
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
    </div>
  );
}
