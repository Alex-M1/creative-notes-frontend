import React from 'react';
import { useTranslation } from 'react-i18next';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';
import { IInput } from './types';

const Input = ({
    id,
    name,
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
    padding,
    color,
    bgFocusColor,
    fontSizeInp,
    borderColor,
    placeholder,
    errorMessage,
} : IInput) => {
    const { t } = useTranslation();
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        onChange({ name: e.target.name, value: e.target.value });
    };
    return (
        <StInputContainer width={width} height={height}>
            {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={type}
                value={value}
                margin={margin}
                color={color}
                onChange={handleOnchange}
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
