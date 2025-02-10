import CampaignCard from "@/app/components/CampaignCard";

import Link from "next/link";

export default function Home({ campaigns }) {
  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">
          Help Nigerians Afford Medical Bills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <div className="text-center my-8">
          <Link
            href="/create"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Start a Campaign
          </Link>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const campaigns = [
    {
      id: 1,
      title: "Help John Get Surgery",
      description: "John needs urgent surgery to save his life. Please donate!",
      goalAmount: 500000,
      raisedAmount: 200000,
      imageUrl: "/images/john.jpg",
    },
    {
      id: 2,
      title: "Support Mary’s Cancer Treatment",
      description:
        "Mary is battling cancer and needs financial support for her treatment.",
      goalAmount: 1000000,
      raisedAmount: 750000,
      imageUrl: "/images/mary.jpg",
    },
  ];

  return {
    props: {
      campaigns,
    },
  };
}
