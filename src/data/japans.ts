import { Restaurant } from './restaurants';

const japans: Array<Omit<Restaurant, 'type'> & { type: 'japan' }> = [
  {
    name: '핑퐁',
    type: 'japan',
    best: '탄탄멘, 마파두부, 생맥주',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/121519031',
  },
  {
    name: '토도로끼',
    type: 'japan',
    best: '라멘, 우동, 돈까스',
    location: '작은집',
    map: 'https://map.naver.com/v5/entry/place/33102180',
  },
];

export default japans;
