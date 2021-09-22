export interface IStyledLabel{
    margin?: string;
    cursor?: string;
    display?: string;
    fontWeight?: string;
}
export interface IStyledInput{
    inputHeight?: string;
    padding?: string;
    margin?: string;
    borderColor?: string;
    brRadius?: string;
    bgColor?: string;
    outlineInput?: string;
    cursorType?: string;
    borderRadius?: string;
    fontWeight?: string;
    fontSizeInp?: string;
    textAlignInput?: string;
    transition?: string;
    focusColor?: string;
    bgFocusColor?: string;
}
export interface IStyledContainer{
    width?: string;
    height?: string;
}
export type TInputChangeArg = {
    name: string;
    value: string;
};

export interface IInput{
    id: string;
    name?: string;
    type?: string;
    label?: string;
    width?: string;
    value?: string;
    margin?: string;
    height?: string;
    bgColor?: string;
    padding?: string;
    fontSizeInp?: string;
    borderColor?: string;
    inputHeight?: string;
    onChange: (arg: TInputChangeArg) => void;
    borderRadius?: string;
    placeholder: string;
    errorMessage?: string;
    bgFocusColor?: string;
    color?: string;
}
