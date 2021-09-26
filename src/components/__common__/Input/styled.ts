import styled from 'styled-components';
import {
  INPUT_COLOR_DEFAULT,
  INPUT_BORDER_COLOR_DEFAULT,
  INPUT_BACKGROUND_COLOR_DEFAULT,
  INPUT_BORDER_FOCUS_COLOR_DEFAULT,
} from '@constants/colors';
import { IStyledLabel, IStyledInput, IStyledContainer } from './types';

export const StLabel = styled.label < IStyledLabel >`
   ${({ margin = '0 0px 10px 0' }) => margin && `margin: ${margin}`};
   padding: 0;
   justify-content: flex-start;
   ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
   ${({ display = 'block' }) => display && `display: ${display}`};
   ${({ fontWeight = 'bold' }) => fontWeight && `font-weight: ${fontWeight}`};
`;

export const StInput = styled.input < IStyledInput >`
    width: 100%;
    height: ${({ inputHeight = '100%' }) => inputHeight};
    padding: ${({ padding = '5px' }) => padding};
    ${({ margin }) => margin && `margin: ${margin}`};
    ${({ borderColor = INPUT_BORDER_COLOR_DEFAULT }) => borderColor && `border: 1px solid ${borderColor}`};
    box-sizing: border-box;
     font-family: 'Play', sans-serif;
    ${({ brRadius }) => brRadius && `border-radius: ${brRadius}`};
    background-color: ${({ bgColor = INPUT_BACKGROUND_COLOR_DEFAULT }) => (bgColor)};
    ${({ outlineInput = 'none' }) => outlineInput && `outline: ${outlineInput}`};
    ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
    color: ${({ color = INPUT_COLOR_DEFAULT }) => color};
    font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    ${({ textAlignInput }) => textAlignInput && `text-align: ${textAlignInput}`}
    
    ${({ transition = 'all 1000ms ease-in-out' }) => transition && `transition: ${transition}`};
    &:focus {
      ${({ borderColor = INPUT_BORDER_FOCUS_COLOR_DEFAULT }) => borderColor && `border: 1px solid ${borderColor}`};
    }
    
    &::placeholder {
      color: ${({ color = INPUT_COLOR_DEFAULT }) => color};
      font-size: ${({ fontSizeInp = '14px' }) => fontSizeInp};
    }
`;

export const StErrorSpan = styled.span`color: ${({ color = 'red' }) => color}`;

export const StInputContainer = styled.div < IStyledContainer >`
    ${({ width = '100%' }) => width && `width: ${width}`};
    ${({ height = '50px' }) => height && `height: ${height}`};
`;

export const StEyeImg = styled.img`
  width: 25px;
  position: relative;
  left: 90%;
  bottom: 170%;
`;
