import { useContext, useEffect, useState } from 'react';
import { getRestaurants, Restaurant, RestaurantType } from '../api/restaurants';
import { Context } from '../Context/ContextProvider';
import * as Styled from './style';

const Roulette = () => {
  const { location } = useContext(Context);
  const [start, setStart] = useState(false);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    location === '전체' ? true : restaurant.location === location
  );

  useEffect(() => {
    (async () => {
      const res = await getRestaurants();
      const restaurants = res.map((r) => r.fields);
      setRestaurants(restaurants);
    })();
  }, []);

  return (
    <Styled.RouletteWrapper>
      <Styled.RouletteList>
        <Styled.RouletteBelt
          $start={start}
          $count={filteredRestaurants.length - 1}
        >
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
