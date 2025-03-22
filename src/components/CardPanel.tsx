"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Venue } from "@/constants/venue";
import Link from "next/link";
import { venues as venuesData } from "@/constants/venue";

export default function CardPanel() {
  const [venues, setVenues] = useState<Venue[]>(venuesData);
  const [disappeared, setDisappeared] = useState<Set<string>>(new Set());

  const handleRatingChange = (venueName: string, newRating: number) => {
    setVenues((prevVenues) =>
      prevVenues.map((venue) =>
        venue.name === venueName ? { ...venue, rating: newRating } : venue
      )
    );

    setDisappeared((prev) => {
      const newDisappeared = new Set(prev);
      if (newRating > 0) {
        newDisappeared.delete(venueName);
      }
      return newDisappeared;
    });
  };

  const handleClick = (venueName: string) => {
    setDisappeared((prev) => {
      const newDisappeared = new Set(prev);
      newDisappeared.add(venueName);
      return newDisappeared;
    });
  };

  return (
    <div>
      <ul className="flex flex-wrap gap-8 w-full justify-start">
        {venues.map((venue) => (
          <li key={venue.name}>
            <Link href={`/venue/${venue.vid}`}>
              {/* <Card venue={venue} onRatingChange={handleRatingChange} /> */}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t w-full flex justify-center flex-col px-10">
        <h2 className="text-lg font-semibold text-black">Ratings</h2>
        <ul className="list-disc ml-6 w-full">
          {venues.map(({ name, rating }) => {
            if (rating >= 0 && !disappeared.has(name)) {
              return (
                <li
                  key={name}
                  className="text-black w-1/2 px-4 hover:scale-105 transition-all py-1 cursor-pointer"
                  onClick={() => {
                    handleClick(name);
                  }}
                  data-testid={name}
                >
                  {name}: {rating}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
