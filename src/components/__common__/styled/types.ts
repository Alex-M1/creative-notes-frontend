import { DEFAULT_COLORS } from '@constants/colors';
import { Property as CSS } from 'csstype';

export interface IStGrid extends SizesProps, ColorsProps, PositionProps, BorderProps, FontProps {
  columns?: string;
  gap?: string;
  row?: any;
  align?: CSS.AlignContent;
  linkWithTextDecor?: boolean;
}

export interface SizesProps {
  width?: string | number;
  width1366?: string | number;
  padding?: string | number;
  margin?: string | number;
  top?: string | number;
  left?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  bxSizing?: string;
  minWidth?: string | number;
  maxWidth?: string | number;
  marginBottom?: string | number;
  minHeight?: string | number;
}

export interface BorderProps {
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRadius?: string;
  hasBorder?: boolean;
  hasBlueBorder?: boolean;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
  hasBorderLeft?: boolean;
  hasBorderRight?: boolean;
  noOutLine?: boolean;
  boxShadow?: string;
  hasGreyBorder?: boolean;
}
type ColorType = keyof typeof DEFAULT_COLORS;
export interface ColorsProps {
  backgroundColor?: ColorType;
  color?: ColorType;
  brColor?: ColorType;
  phColor?: ColorType;
  hwColor?: ColorType;
  hwBgColor?: ColorType;
  brColorTop?: ColorType;
  brColorLeft?: ColorType;
  brColorBottom?: ColorType;
  opacity?: number;
}
export interface PositionProps extends SizesProps, ColorsProps {
  position?: CSS.Position;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  zIndex?: string | number;
  overflowY?: CSS.OverflowY;
  overflowX?: CSS.OverflowY;
}

export interface FontProps {
  fontWeight?: CSS.FontWeight;
  fontSize?: string | number;
  lineHeight?: string | number;
  center?: boolean;
  noEllipses?: boolean;
  cursorPointer?: boolean;
  max2Lines?: boolean;
  textAlign?: CSS.TextAlign;
  textDecoration?: string;
  fontStyle?: CSS.FontStyle;
  lowercase?: boolean;
}

export interface StFlexProps extends SizesProps, ColorsProps, PositionProps, BorderProps, FontProps {
  jc?: CSS.JustifyContent;
  sb?: boolean;
  alignSelf?: CSS.AlignSelf;
  center?: boolean;
  justifyContent?: CSS.JustifyContent;
  alignItems?: CSS.AlignItems;
  alignContent?: CSS.AlignContent;
  ai?: CSS.AlignItems;
  direction?: CSS.Direction;
  flexDirection?: CSS.FlexDirection;
  wrap?: CSS.FlexWrap;
  hasEllipsis?: boolean;
  type?: string;
  hasMarginTop?: string;
  cursor?: string;
  fw?: string;
  noSelect?: boolean;
  flex?: string | number;
  overflowX?: CSS.OverflowY;
}
