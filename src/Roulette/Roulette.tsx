import { useContext, useEffect, useState } from 'react';
import { getRestaurants, Restaurant, RestaurantType } from '../api/restaurants';
import { Context } from '../Context/ContextProvider';
import * as Styled from './style';

const Roulette = () => {
  const { location, type } = useContext(Context);
  const [start, setStart] = useState(false);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  const filteredRestaurants = restaurants
    .filter((restaurant) =>
      location === '전체' ? true : restaurant.location === location
    )
    .filter((restaurant) =>
      type === '전체' ? true : restaurant.type === type
    );

  const shuffle = () => {
    const rest = restaurants.slice();
    let len = rest.length;

    while (len) {
      const i = Math.floor(Math.random() * len--);
      [rest[len], rest[i]] = [rest[i], rest[len]];
    }

    setRestaurants(rest);
  };

  const handleClickStart = () => {
    shuffle();
    setStart(true);
  };

  const handleClickReset = () => {
    setStart(false);
  };

  useEffect(() => {
    (async () => {
      const res = await getRestaurants();
      const restaurants = res.map((r) => r.fields);
      setRestaurants(restaurants);
    })();
  }, []);

  useEffect(() => {
    setStart(false);
  }, [location, type]);

  return (
    <Styled.RouletteWrapper>
      <Styled.RouletteList>
        <Styled.RouletteBelt
          $start={start}
          $count={filteredRestaurants.length - 1}
        >
          <Styled.RouletteListEmptyItem>🎁</Styled.RouletteListEmptyItem>
          {filteredRestaurants.map((restaurant, idx) => (
            <Styled.RouletteListItem key={`roulette-list-item-${idx}`}>
              {restaurant.name}
              <Styled.RestaurantBadge type={Restaurant[restaurant.type]}>
                {restaurant.type}
              </Styled.RestaurantBadge>
            </Styled.RouletteListItem>
          ))}
        </Styled.RouletteBelt>
      </Styled.RouletteList>
      <Styled.RouletteButtonWrapper>
        <Styled.RouletteButton onClick={handleClickStart}>
          시작
        </Styled.RouletteButton>
        <Styled.RouletteButton onClick={handleClickReset}>
          리셋
        </Styled.RouletteButton>
      </Styled.RouletteButtonWrapper>
    </Styled.RouletteWrapper>
  );
};

export default Roulette;
