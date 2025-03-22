export interface Venue {
  vid: string;
  name: string;
  imgSrc: string;
  rating: number;
}

export const venues: Venue[] = [
  {
    vid: "001",
    name: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
    rating: 0,
  },
  {
    vid: "002",
    name: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
    rating: 0,
  },
  {
    vid: "003",
    name: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
    rating: 0,
  },
];
