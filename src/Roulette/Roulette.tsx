import { useContext, useEffect, useRef, useState } from 'react';
import { getRestaurants, Restaurant, RestaurantType } from '../api/restaurants';
import { Context } from '../Context/ContextProvider';
import * as Styled from './style';

const Roulette = () => {
  const { location, type } = useContext(Context);
  const [start, setStart] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const timerId = useRef<number>();

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
    !start && shuffle();
    setStart(true);
    timerId.current = window.setTimeout(() => setShowResult(true), 3000);
  };

  const handleClickReset = () => {
    setStart(false);
    setShowResult(false);
    timerId.current && window.clearTimeout(timerId.current);
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

  const isDisabledStartButton = filteredRestaurants.length <= 1;

  return (
    <>
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
        <Styled.RouletteResult>
          {showResult && filteredRestaurants.at(-1)?.best}
        </Styled.RouletteResult>
      </Styled.RouletteWrapper>
      <Styled.RouletteGameStarter>
        <Styled.RouletteButtonWrapper>
          <Styled.RouletteStartButton
            onClick={handleClickStart}
            disabled={isDisabledStartButton}
          >
            시작
          </Styled.RouletteStartButton>
          <Styled.RouletteResetButton onClick={handleClickReset}>
            리셋
          </Styled.RouletteResetButton>
        </Styled.RouletteButtonWrapper>
        {isDisabledStartButton && (
          <Styled.WarningText>
            룰렛을 돌리기 위한 식당이 없어요...
          </Styled.WarningText>
        )}
      </Styled.RouletteGameStarter>
    </>
  );
};

export default Roulette;
