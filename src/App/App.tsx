import ContextProvider from '../Context/ContextProvider';
import LocationSelectors from '../RadioBoxSelectors/LocationSelectors';
import TypeSelectors from '../RadioBoxSelectors/TypeSelectors';
import Roulette from '../Roulette';
import * as Styled from './style';

function App() {
  return (
    <Styled.Container>
      <Styled.Header>우아한 점심 룰렛</Styled.Header>
      <Styled.GuideList>
        <li>오늘 점심 메뉴 선택이 힘들때 간단히 룰렛을 돌려보아요!</li>
        <li>
          각 사무실(큰집, 작은집, 루터회관, 더큰집) 주변 식당만 대상으로 하고
          있어요!
        </li>
      </Styled.GuideList>
      <ContextProvider>
        <LocationSelectors />
        <TypeSelectors />
        <Roulette />
      </ContextProvider>
    </Styled.Container>
  );
}

export default App;
