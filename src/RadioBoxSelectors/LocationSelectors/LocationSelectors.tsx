import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';
import * as Styled from './style';

const RADIO_INPUT_NAME = 'office';

const RADIO_INPUTS = [
  { location: '전체', value: '전체' },
  { location: '큰집', value: '큰집' },
  { location: '작은집', value: '작은집' },
  { location: '더큰집', value: '더큰집' },
  { location: '루터회관', value: '루터회관' },
];

const LocationSelectors = () => {
  const { handleSelectLocation } = useContext(Context);
  return (
    <Styled.RadioBoxWrapper>
      {RADIO_INPUTS.map((input, idx) => (
        <Styled.RadioBoxLabel key={`radio-${RADIO_INPUT_NAME}-${idx}`}>
          <input
            type='radio'
            name={RADIO_INPUT_NAME}
            value={input.value}
            defaultChecked={idx === 0}
            onChange={(e) => handleSelectLocation(e.target.value)}
          />
          <span>{input.location}</span>
        </Styled.RadioBoxLabel>
      ))}
    </Styled.RadioBoxWrapper>
  );
};

export default LocationSelectors;
