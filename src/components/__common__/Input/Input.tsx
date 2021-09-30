import React from 'react';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';
import { IInput } from './types';

const Input: React.FC<IInput> = ({
  id,
  width,
  type = 'text',
  label,
  value,
  height,
  margin,
  onChange,
  inputHeight,
  borderRadius,
  bgColor,
  borderWidth,
  padding,
  color,
  bgFocusColor,
  fontSizeInp,
  borderColor,
  placeholder,
  textAlignInput,
  errorMessage,
}) => {
  const { t } = useTranslation();
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };
  return (
    <StInputContainer width={width} height={height}>
      {!!label && <StLabel htmlFor={id}>{t(label)}</StLabel>}
      <StInput
        id={id}
        type={type}
        borderWidth={borderWidth}
        value={value}
        margin={margin}
        color={color}
        onChange={handleOnchange}
        textAlignInput={textAlignInput}
        borderRadius={borderRadius}
        inputHeight={inputHeight}
        placeholder={t(placeholder)}
        bgColor={bgColor}
        padding={padding}
        borderColor={borderColor}
        fontSizeInp={fontSizeInp}
        bgFocusColor={bgFocusColor}
      />
      {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
    </StInputContainer>
  );
};

export default Input;
