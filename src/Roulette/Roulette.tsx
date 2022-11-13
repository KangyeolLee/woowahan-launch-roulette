import { useContext, useState } from 'react';
import { Context } from '../Context/ContextProvider';
import restaurants, { RestaurantType } from '../data/restaurants';
import * as Styled from './style';

const Roulette = () => {
  const { location } = useContext(Context);
  const [start, setStart] = useState(false);

  const dummys = [...restaurants, ...restaurants, ...restaurants].filter(
    (restaurant) =>
      location === '전체' ? true : restaurant.location === location
  );

  return (
    <Styled.RouletteWrapper>
      <Styled.RouletteList>
        <Styled.RouletteBelt $start={start} $count={dummys.length - 1}>
          {dummys.map((restaurant, idx) => (
            <Styled.RouletteListItem key={`roulette-list-item-${idx}`}>
              {restaurant.name}
              <Styled.RestaurantBadge type={restaurant.type}>
                {RestaurantType[restaurant.type]}
              </Styled.RestaurantBadge>
            </Styled.RouletteListItem>
          ))}
        </Styled.RouletteBelt>
      </Styled.RouletteList>
      <Styled.RouletteButtonWrapper>
        <Styled.RouletteButton onClick={() => setStart(true)}>
          시작
        </Styled.RouletteButton>
        <Styled.RouletteButton onClick={() => setStart(false)}>
          리셋
        </Styled.RouletteButton>
      </Styled.RouletteButtonWrapper>
    </Styled.RouletteWrapper>
  );
};

export default Roulette;
