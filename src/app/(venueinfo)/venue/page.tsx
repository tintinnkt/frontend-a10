import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

const VenuePage: React.FC = () => {
  const venuesPromise = getVenues();

  return (
    <div className="container mx-auto px-3 py-2">
      <h1 className="text-3xl font-bold mb-4">Venues</h1>
      <Suspense fallback={<LinearProgress className="mt-4" />}>
        <VenueCatalog venuesJson={venuesPromise} />
      </Suspense>
    </div>
  );
};

export default VenuePage;
