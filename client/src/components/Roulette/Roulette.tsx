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
            $count={filteredRestaurants.length}
          >
            <Styled.RouletteListEmptyItem>
              π START π
            </Styled.RouletteListEmptyItem>
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
          <Styled.ResultMenus showResult={showResult}>
            <Styled.ResultMenuDescriptionTag color='#282A3A'>
              λνλ©λ΄
            </Styled.ResultMenuDescriptionTag>
            <span>{filteredRestaurants.at(-1)?.best ?? '-'}</span>
          </Styled.ResultMenus>
          <Styled.ResultMenus showResult={showResult}>
            <Styled.ResultMenuMap
              href={
                filteredRestaurants.at(-1)?.map ?? 'https://map.naver.com/v5'
              }
            >
              κ°κ² μμΈμ λ³΄ λ³΄λ¬κ°κΈ°
            </Styled.ResultMenuMap>
          </Styled.ResultMenus>
        </Styled.RouletteResult>
      </Styled.RouletteWrapper>
      <Styled.RouletteGameStarter>
        <Styled.RouletteButtonWrapper>
          <Styled.RouletteStartButton
            onClick={handleClickStart}
            disabled={isDisabledStartButton}
          >
            μμ
          </Styled.RouletteStartButton>
          <Styled.RouletteResetButton onClick={handleClickReset}>
            λ¦¬μ
          </Styled.RouletteResetButton>
        </Styled.RouletteButtonWrapper>
        {isDisabledStartButton && (
          <Styled.WarningText>
            λ£°λ μ λλ¦¬κΈ° μν μλΉμ΄ μμ΄μ...
          </Styled.WarningText>
        )}
      </Styled.RouletteGameStarter>
    </>
  );
};

export default Roulette;
