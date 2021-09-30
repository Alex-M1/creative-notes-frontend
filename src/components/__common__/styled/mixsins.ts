import { css } from 'styled-components';
import * as T from './types';

export const sizeStyles = css < T.SizesProps >`
    ${props => props.width && `width: ${props.width};`};  
    ${props => props.height && `height: ${props.height};`};
    ${props => props.padding && `padding: ${props.padding};`};
    ${props => props.margin && `margin: ${props.margin};`};
    ${props => props.minWidth && `min-width: ${props.minWidth};`};
    ${props => props.bxSizing && `box-sizing: ${props.bxSizing}`}
    ${props => props.maxWidth && `max-width: ${props.maxWidth};`};
    ${props => props.minHeight && `min-height: ${props.minHeight};`};
    ${props => props.maxHeight && `max-height: ${props.maxHeight};`};
    ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`};
`;

export const positionStyles = css < T.PositionProps >`
    ${props => props.overflowY && `overflow-y: ${props.overflowY};`}; 
    ${props => props.overflowX && `overflow-x: ${props.overflowX};`}; 
    ${props => props.position && `position: ${props.position};`}; 
    ${props => props.top && `top: ${props.top};`};
    ${props => props.bottom && `bottom: ${props.bottom};`};
    ${props => props.left && `left: ${props.left};`};
    ${props => props.right && `right: ${props.right};`}; 
    ${props => props.zIndex && `z-index: ${props.zIndex};`}; 
`;
export const borderStyles = css < T.BorderProps >`
    ${props => props.hasBorder && `border: 1px solid ${props.theme.colors.primary}; border-radius: ${props.theme.dimensions.borderRadius};`};
    ${props => props.hasGreyBorder && `border: 1px solid ${props.theme.colors.border}; border-radius: ${props.theme.dimensions.borderRadius};`};
    ${props => props.hasBorderRight && `border-right: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderLeft && `border-left: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderTop && `border-top: 1px solid ${props.theme.colors.border};`};
    ${props => props.hasBorderBottom && `border-bottom: 1px solid ${props.theme.colors.border};`};
    ${props => props.borderBottom && `border-bottom: ${props.borderBottom};`};
    ${props => props.borderTop && `border-top: ${props.borderTop};`};
    ${props => props.border && `border: ${props.border};`};
    ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
    ${props => props.boxShadow && `box-shadow: ${props.boxShadow}`};
    ${props => props.noOutLine && 'outline: none!important'};
`;
export const fontStyles = css < T.FontProps >`
 &&&& {
    ${props => props.fontWeight && `font-weight: ${props.fontWeight}!important;`};
    ${props => props.fontSize && `font-size: ${props.fontSize};`};
    ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
    ${props => props.cursorPointer && 'cursor: pointer;'};
    ${props => props.textAlign && `text-align: ${props.textAlign};`};
    ${props => props.textDecoration && `text-decoration: ${props.textDecoration};`};
    ${props => props.lowercase && 'text-transform: lowercase;'};
    ${props => props.fontStyle && `font-style: ${props.fontStyle};`};
 }
`;
export const flexStyles = css < T.StFlexProps >`
    display: flex;
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
    ${props => props.alignItems && `align-items: ${props.alignItems};`};
    ${props => props.ai && `align-items: ${props.ai};`};
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`};
    ${props => props.jc && `justify-content: ${props.jc};`};
    ${props => props.sb && 'justify-content: space-between;'};
    ${props => props.center && 'justify-content: center; align-items: center'};
    ${props => props.fw && `flex-wrap: ${props.fw}`};
    ${props => props.flex && `flex: ${props.flex}`};
`;
