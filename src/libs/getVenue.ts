import { VenueItem } from "@/types/venue";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getVenue = async (
  id: string
): Promise<{ success: boolean; data: VenueItem }> => {
  await delay(300);

  const response = await fetch(
    `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`,
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

export default getVenue;
