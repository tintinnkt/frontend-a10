import React from "react";
import TopMenuItem from "./TopMenuItem";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full text-white flex justify-between h-20 py-5 items-center gap-2 px-8 bg-gradient-to-r  from-red-500 to-cyan-500">
      <div className="flex items-center justify-center ">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="hover:bg-neutral-100/20 p-4 rounded-md text-white">
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="hover:bg-neutral-100/20 p-4 rounded-md text-white">
              {" "}
              Sign-In
            </div>
          </Link>
        )}
        <Link href="mybooking">
          <TopMenuItem href="/mybooking" label="My Booking" />
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="mybooking">
          <TopMenuItem href="/booking" label="Booking" />
        </Link>
        <Image src="/img/logo.png" width={40} height={10} alt="logo" />
      </div>
    </div>
  );
}
