import styled from 'styled-components';

export const RadioBoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 12px;
  background-color: rgb(243, 245, 247);
  border-radius: 4px;

  & + & {
    margin-top: 20px;
  }
`;

export const RadioBoxLabel = styled.label`
  display: flex;
  gap: 5px;

  > span {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &::before {
      margin-right: 4px;
      content: '';
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      box-shadow: inset 0 0 0 0.1rem #2ac5c0;
      transition: box-shadow 0.15s ease;
    }
  }
`;

export const RadioButtonInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  visibility: hidden;

  &:checked + span {
    &::before {
      box-shadow: inset 0 0 0 0.4rem #2ac5c0;
    }
  }
`;
