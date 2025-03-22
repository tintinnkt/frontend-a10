import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
const bannerImg: string[] = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];
export default function Banner() {
  const [count, setCount] = useState(0);
  const { data: session } = useSession();
  return (
    <div
      className="relative w-full h-[40vh] overflow-hidden"
      onClick={() => setCount((count + 1) % 4)}
    >
      <Image
        src={bannerImg[count]}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <section className="relative  z-10 flex flex-col items-center justify-center text-center text-white h-full px-6 sm:px-12">
        <p className="text-4xl font-bold text-shadow-md sm:text-5xl">
          where every event finds its venue
        </p>
        <p className="mt-4 text-lg sm:text-xl max-w-4xl text-shadow-md">
          Finding the perfect venue has never been easier. Whether it's a
          wedding, corporate event, or private party, we connect people to the
          perfect place.G
        </p>
        {session ? (
          <div className="z-30 absolute top-5 right-10 font-semibold text-white  text-2xl">
            Welcome {session.user?.name}
          </div>
        ) : null}
      </section>
    </div>
  );
}
