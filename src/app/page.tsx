"use client";
import Banner from "@/components/Banner";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center pb-100 h-fit w-full">
      <Banner />

      <section className="w-full max-w-5xl px-6 sm:px-10 mt-4">
        <div className="w-full flex justify-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/venue");
            }}
          >
            Select Venue
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Page;
