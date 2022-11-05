import { Restaurant } from './restaurants';

const wests: Array<Omit<Restaurant, 'type'> & { type: 'west' }> = [
  {
    name: '고든램지버거',
    type: 'west',
    best: '콜드브루 베이스 음료',
    location: '더큰집',
    map: 'https://map.naver.com/v5/entry/place/1267493146',
  },
  {
    name: '정순함박',
    type: 'west',
    best: '튀김함박스테이크',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/37755810',
  },
];

export default wests;
