import cafes from './cafes';
import chinas from './chinas';
import japans from './japans';
import koreas from './koreas';
import wests from './wests';

export type Restaurant = {
  name: string;
  type: 'cafe' | 'china' | 'korea' | 'japan' | 'west';
  best?: string;
  location: '큰집' | '작은집' | '더큰집' | '루터회관';
  map: string;
};

export const RestaurantType = Object.freeze({
  cafe: '카페',
  china: '중식',
  korea: '한식',
  japan: '일식',
  west: '양식',
} as const);

const restaurants: Restaurant[] = [
  ...cafes,
  ...chinas,
  ...koreas,
  ...japans,
  ...wests,
];

export default restaurants;
