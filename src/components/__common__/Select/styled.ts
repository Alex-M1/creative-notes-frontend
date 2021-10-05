import styled from 'styled-components';

export const StSelect = styled.select`
  padding: 10px;
  background-color: rgba(0,0,0, .7);
  color: white;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
  outline: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
  &::after{
    content: '❯';
    font-size: 50px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
