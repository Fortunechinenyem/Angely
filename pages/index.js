import CampaignCard from "@/app/components/CampaignCard";
import Link from "next/link";

export default function Home({ campaigns }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <h1 className="text-4xl font-extrabold text-center">
          Help Nigerians Afford Medical Bills
        </h1>
        <p className="text-center mt-2 text-lg">
          Your support can save lives. Join us in making a difference.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <div className="text-center my-12">
          <Link
            href="/create"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Start a Campaign
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Medical Aid Nigeria. All Rights
          Reserved.
        </p>
      </footer>
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
    },
    {
      id: 2,
      title: "Support Mary’s Cancer Treatment",
      description:
        "Mary is battling cancer and needs financial support for her treatment.",
      goalAmount: 1000000,
      raisedAmount: 750000,
    },
    {
      id: 3,
      title: "Support Nafisa’s Kidney Treatment",
      description:
        "Nafisa has kidney failure and needs financial support for her treatment.",
      goalAmount: 1000000,
      raisedAmount: 750000,
    },
  ];

  return {
    props: {
      campaigns,
    },
  };
}
