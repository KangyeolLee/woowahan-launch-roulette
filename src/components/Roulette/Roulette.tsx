import { Restaurant } from '../../api/restaurants';
import useRoulette from '../../hooks/useRoulette';
import * as Styled from './style';

const Roulette = () => {
  const {
    start,
    showResult,
    isDisabledStartButton,
    filteredRestaurants,
    handleClickStart,
    handleClickReset,
  } = useRoulette();

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
