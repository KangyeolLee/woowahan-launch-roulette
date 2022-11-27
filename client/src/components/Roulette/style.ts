import styled, { css } from 'styled-components';
import { Restaurant } from '../../api/restaurants';

type RestaurantType = typeof Restaurant[keyof typeof Restaurant];

export const RouletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const RouletteList = styled.div`
  margin-top: 40px;
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
  china: '#9C254D',
  cafe: '#F7A4A4',
  korea: '#00005C',
  japan: '#8EC3B0',
  west: '#E14D2A',
  betnam: '#251B37',
  bunsic: '#5C2E7E',
  alcohol: '#562B08',
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
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${({ type }) => RestaurantBackgroundColors[type]};
  color: #fff;
  font-weight: normal;
`;

export const RouletteResult = styled.div`
  margin-top: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
`;

export const ResultMenus = styled.div<{ showResult: boolean }>`
  display: flex;
  align-items: center;
  transition-property: transform, opacity;
  transition-duration: 0.45s;
  transition-timing-function: ease-in-out;
  transform: translateY(30px);
  opacity: 0;

  ${({ showResult }) =>
    showResult &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}

  & + & {
    margin-top: 12px;
  }
`;

export const ResultMenuDescriptionTag = styled.span<{ color: string }>`
  border-radius: 4px;
  margin-right: 12px;
  padding: 4px 8px;
  background-color: ${({ color }) => color};
  color: #fff;
`;

export const ResultMenuMap = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #1a7cff;
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
  &:disabled {
    background-color: #ededed;
    cursor: not-allowed;
  }
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
