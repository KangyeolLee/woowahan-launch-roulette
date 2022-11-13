import styled, { css } from 'styled-components';
import { RestaurantType } from '../data/restaurants';

export const RouletteWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const RouletteList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid #ededed;
  border-radius: 4px;
  list-style-type: none;
  min-width: 200px;
  max-width: 200px;
  height: 66px;
  overflow: hidden;
  user-select: none;
`;

export const RouletteBelt = styled.div<{ $start: boolean; $count: number }>`
  transition: transform 1s ease-in-out;

  ${({ $start, $count }) =>
    $start &&
    css`
      transform: translateY(-${82 * $count}px);
    `}
`;

export const RouletteListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #eee;
  height: 50px;

  & + & {
    margin-top: 16px;
  }
`;

const RestaurantBackgroundColors: Record<keyof typeof RestaurantType, string> =
  {
    china: 'red',
    cafe: 'green',
    korea: 'blue',
    japan: 'purple',
    west: 'brown',
  };

export const RestaurantBadge = styled.span<{
  type: keyof typeof RestaurantType;
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
`;

export const RouletteButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  border-radius: 4px;
  border: 1px solid #ededed;
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
