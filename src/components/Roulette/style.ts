import styled, { css } from 'styled-components';
import { Restaurant } from '../../api/restaurants';

type RestaurantType = typeof Restaurant[keyof typeof Restaurant];

export const RouletteWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const RouletteList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid rgb(243, 245, 247);
  border-radius: 4px;
  list-style-type: none;
  min-width: 200px;
  max-width: 200px;
  height: 66px;
  overflow: hidden;
  user-select: none;
`;

export const RouletteBelt = styled.div<{ $start: boolean; $count: number }>`
  content-visibility: auto;

  ${({ $start, $count }) =>
    $start &&
    css`
      transition: transform 3s ease-in-out;
      transform: translateY(-${82 * $count}px);
    `}
`;

export const RouletteListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  background-color: rgb(243, 245, 247);
  height: 50px;
  content-visibility: auto;
  font-weight: bold;

  & + & {
    margin-top: 16px;
  }
`;

export const RouletteListEmptyItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  background-color: rgb(243, 245, 247);
  height: 50px;
  margin-bottom: 16px;
`;

const RestaurantBackgroundColors: Record<RestaurantType, string> = {
  china: 'red',
  cafe: 'green',
  korea: 'blue',
  japan: 'purple',
  west: 'brown',
  betnam: 'brown',
  bunsic: 'orrange',
  alcohol: 'yellow',
};

export const RestaurantBadge = styled.span<{
  type: RestaurantType;
}>`
  display: flex;
  height: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  font-size: 12px;
  padding: 2px;
  border-radius: 4px;
  background-color: ${({ type }) => RestaurantBackgroundColors[type]};
  color: #fff;
  font-weight: normal;
`;

export const RouletteResult = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  border-radius: 4px;
  border: 1px solid rgb(243, 245, 247);
  border-radius: 4px;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 38px;
    left: -10px;
    border-right: 10px solid #111;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

export const RouletteGameStarter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RouletteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RouletteButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
  & + & {
    margin-left: 16px;
  }
`;

export const RouletteStartButton = styled(RouletteButton)`
  background-color: #2ac5c0;
  color: #fff;
  font-weight: bold;
`;

export const RouletteResetButton = styled(RouletteButton)`
  background-color: #ff4032;
  color: #fff;
  font-weight: bold;
`;

export const WarningText = styled.span`
  font-size: 14px;
  color: red;
  margin-top: 8px;
`;
