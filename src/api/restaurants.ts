import { Restaurant } from '../data/restaurants';

export const getRestaurants = async () => {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_API_RECORD_TARGET}/restaurants`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  const result = await response.json();
  return result.records as { fields: Restaurant }[];
};
