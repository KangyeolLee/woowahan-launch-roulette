import { Restaurant } from './restaurants';

const chinas: Array<Omit<Restaurant, 'type'> & { type: 'china' }> = [
  {
    name: '차이797',
    type: 'china',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/749357302',
  },
  {
    name: '차이나스토리',
    type: 'china',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/35372422',
  },
];

export default chinas;
