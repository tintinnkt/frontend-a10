import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import Link from "next/link";

interface CardProps {
  vid: string;
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (newRating: number) => void;
}

const Card: React.FC<CardProps> = ({
  vid,
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}) => {
  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newRating: number | null
  ) => {
    event.stopPropagation();
    if (newRating !== null && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="shadow-lg">
      <InteractiveCard>
        <Link href={`/venue/${vid}`} legacyBehavior>
          <a className="block">
            <div className="relative w-full h-[200px] overflow-hidden">
              <Image
                src={imgSrc}
                alt={venueName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-3 bg-neutral-100">
              <h2 className="text-xl font-bold mb-2 text-purple-900 font-sans">
                {venueName}
              </h2>
            </div>
          </a>
        </Link>

        {typeof rating !== "undefined" && (
          <div className="p-3 bg-neutral-100">
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={onRatingChange ? handleRatingChange : undefined}
              readOnly={!onRatingChange}
            />
          </div>
        )}
      </InteractiveCard>
    </div>
  );
};

export default Card;
