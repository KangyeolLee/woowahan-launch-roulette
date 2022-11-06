import * as Styled from './style';

const RADIO_INPUT_NAME = 'office';

const RADIO_INPUTS = [
  { location: '큰집', value: '큰집', checked: true },
  { location: '작은집', value: '작은집', checked: false },
  { location: '더큰집', value: '더큰집', checked: false },
  { location: '루터회관', value: '루터회관', checked: false },
  { location: '전체', value: '전체', checked: false },
];

const LocationSelectors = () => {
  return (
    <Styled.RadioBoxWrapper>
      {RADIO_INPUTS.map((input, idx) => (
        <Styled.RadioBoxLabel key={`radio-${RADIO_INPUT_NAME}-${idx}`}>
          <input type='radio' name={RADIO_INPUT_NAME} value={input.value} />
          <span>{input.location}</span>
        </Styled.RadioBoxLabel>
      ))}
    </Styled.RadioBoxWrapper>
  );
};

export default LocationSelectors;
