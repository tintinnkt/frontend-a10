import { VenueJson } from "@/types/venue";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getVenues = async (): Promise<VenueJson> => {
  await delay(300);

  const response = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();
  return json;
};

export default getVenues;
