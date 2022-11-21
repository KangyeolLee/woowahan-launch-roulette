import React, { useContext } from 'react';
import { Context } from '../../../context/ContextProvider';
import * as Styled from '../style';

const RADIO_INPUNT_NAME = 'type';

const RADIO_INPUTS = [
  { type: '전체', value: '전체' },
  { type: '카페', value: '카페' },
  { type: '중식', value: '중식' },
  { type: '한식', value: '한식' },
  { type: '일식', value: '일식' },
  { type: '양식', value: '양식' },
  { type: '분식', value: '분식' },
  { type: '베트남', value: '베트남' },
  { type: '주류', value: '주류' },
];

const TypeSelectors = () => {
  const { handleSelectType } = useContext(Context);
  return (
    <Styled.RadioBoxWrapper>
      {RADIO_INPUTS.map((input, idx) => (
        <Styled.RadioBoxLabel key={`radio-${RADIO_INPUNT_NAME}-${idx}`}>
          <Styled.RadioButtonInput
            type='radio'
            name={RADIO_INPUNT_NAME}
            value={input.value}
            defaultChecked={idx === 0}
            onChange={(e) => handleSelectType(e.target.value)}
          />
          <span>{input.type}</span>
        </Styled.RadioBoxLabel>
      ))}
    </Styled.RadioBoxWrapper>
  );
};

export default React.memo(TypeSelectors);
