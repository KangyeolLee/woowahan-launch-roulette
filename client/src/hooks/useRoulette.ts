import { useContext, useEffect, useRef, useState } from 'react';
import { getRestaurants, RestaurantType } from '../api/restaurants';
import { Context } from '../context/ContextProvider';

const useRoulette = () => {
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
    setShowResult(false);
  }, [location, type]);

  const isDisabledStartButton = filteredRestaurants.length === 0;

  return {
    start,
    showResult,
    isDisabledStartButton,
    filteredRestaurants,
    handleClickStart,
    handleClickReset,
  };
};

export default useRoulette;
