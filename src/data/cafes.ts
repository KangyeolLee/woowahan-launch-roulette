import { Restaurant } from './restaurants';

const cafes: Array<Omit<Restaurant, 'type'> & { type: 'cafe' }> = [
  {
    name: '마호가니',
    type: 'cafe',
    best: '콜드브루 베이스 음료',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/1046575028',
  },
  {
    name: '밀리언커피',
    type: 'cafe',
    best: '라떼',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/1180511944',
  },
];

export default cafes;
