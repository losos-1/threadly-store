export type Rating = 1 | 2 | 3 | 4 | 5;

export type Review = {
  id: number;
  name: string;
  text: string;
  rating: Rating;
};