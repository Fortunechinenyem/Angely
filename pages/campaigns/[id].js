import { useRouter } from "next/router";
import Head from "next/head";
import CampaignDetails from "@/app/components/CampaignDetails";
import DonateButton from "@/app/components/DonateButton";
import SocialShare from "@/app/components/SocialShare";

const campaigns = [
  {
    id: 1,
    title: "Help John Get Surgery",
    description: "John needs urgent surgery to save his life. Please donate!",
    goalAmount: 500000,
    raisedAmount: 200000,
    imageUrl: "/images/john.jpg",
    updates: [
      {
        id: 1,
        date: "2023-10-01",
        message:
          "Thank you to everyone who has donated so far! We’re halfway to our goal.",
      },
      {
        id: 2,
        date: "2023-10-05",
        message:
          "John’s surgery is scheduled for next week. Please keep supporting!",
      },
    ],
  },
  {
    id: 2,
    title: "Support Mary’s Cancer Treatment",
    description:
      "Mary is battling cancer and needs financial support for her treatment.",
    goalAmount: 1000000,
    raisedAmount: 750000,
    imageUrl: "/images/mary.jpg",
    updates: [
      {
        id: 1,
        date: "2023-09-25",
        message:
          "Mary has started her first round of chemotherapy. Thank you for your support!",
      },
    ],
  },
];

export default function CampaignPage() {
  const router = useRouter();
  const { id } = router.query;

  const campaign = campaigns.find((campaign) => campaign.id === Number(id));

  if (!campaign) {
    return <p>Campaign not found.</p>;
  }

  return (
    <div>
      <Head>
        <title>{campaign.title} - Medical Crowdfunding Platform</title>
        <meta name="description" content={campaign.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <CampaignDetails campaign={campaign} />

        <div className="my-8">
          <DonateButton campaignId={campaign.id} />
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-4">Share this Campaign</h2>
          <SocialShare
            url={`https://yourwebsite.com/campaigns/${campaign.id}`}
            title={campaign.title}
          />
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-4">Updates</h2>
          {campaign.updates.map((update) => (
            <div
              key={update.id}
              className="bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <p className="text-gray-600">{update.date}</p>
              <p className="text-gray-800">{update.message}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
