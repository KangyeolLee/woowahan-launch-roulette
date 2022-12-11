export type RestaurantType = {
  name: string;
  type: keyof typeof Restaurant;
  best?: string;
  location: '큰집' | '작은집' | '더큰집' | '루터회관';
  map: string;
};

export const Restaurant = Object.freeze({
  카페: 'cafe',
  중식: 'china',
  한식: 'korea',
  일식: 'japan',
  양식: 'west',
  분식: 'bunsic',
  베트남: 'betnam',
  주류: 'alcohol',
} as const);

export const getRestaurants = async () => {
  const response = await fetch(
    `https://port-0-woowahan-launch-roulette-13dq2flbjclqg9.gksl2.cloudtype.app/`
  );
  const result = await response.json();
  return result.records as { fields: RestaurantType }[];
};
