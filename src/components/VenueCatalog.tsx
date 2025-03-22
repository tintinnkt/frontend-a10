import { VenueJson } from "@/types/venue";
import Card from "./Card";

interface VenueCatalogProps {
  venuesJson: Promise<VenueJson>;
}

async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  const venueData = await venuesJson;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {venueData.data.map((venue) => (
        <Card
          key={venue._id}
          vid={venue._id}
          venueName={venue.name}
          imgSrc={venue.picture}
        />
      ))}
    </div>
  );
}

export default VenueCatalog;
