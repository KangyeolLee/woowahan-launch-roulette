import restaurants, { RestaurantType } from '../data/restaurants';
import * as Styled from './style';

const Roulette = () => {
  return (
    <Styled.RouletteWrapper>
      <Styled.RouletteList>
        {restaurants.map((restaurant, idx) => (
          <Styled.RouletteListItem key={`roulette-list-item-${idx}`}>
            {restaurant.name}
            <Styled.RestaurantBadge type={restaurant.type}>
              {RestaurantType[restaurant.type]}
            </Styled.RestaurantBadge>
          </Styled.RouletteListItem>
        ))}
        <Styled.BlurOverlay />
      </Styled.RouletteList>
      <Styled.RouletteResult>...만드는중...</Styled.RouletteResult>
    </Styled.RouletteWrapper>
  );
};

export default Roulette;
