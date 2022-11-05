import { Restaurant } from './restaurants';

const koreas: Array<Omit<Restaurant, 'type'> & { type: 'korea' }> = [
  {
    name: '신천직화',
    type: 'korea',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/1277916602',
  },
  {
    name: '민들레',
    type: 'korea',
    best: '제육볶음',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/18465169',
  },
];

export default koreas;
