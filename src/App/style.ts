import styled from 'styled-components';
import { RestaurantType } from '../data/restaurants';

export const Container = styled.div`
  padding: 16px;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const GuideList = styled.ul`
  list-style-position: inside;
  padding: 12px;
  border-radius: 4px;
  background-color: #ededed;
  line-height: 24px;
`;

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
  min-width: 180px;
  max-width: 180px;
  max-height: 380px;
  overflow: hidden;
  user-select: none;
`;

export const BlurOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(180deg, rgba(246, 246, 246, 0) 0%, #fff 71.35%);
`;

export const RouletteListItem = styled.li`
  display: flex;
  padding: 8px;
  border-radius: 4px;
  background-color: #eee;

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
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  font-size: 12px;
  padding: 2px;
  border-radius: 4px;
  background-color: ${({ type }) => RestaurantBackgroundColors[type]};
  color: #fff;
`;

export const RouletteResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  border-radius: 4px;
  border: 1px solid #ededed;
  border-radius: 4px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
