import React from 'react';
import ReactDOM from 'react-dom';
import { StFlex } from '../styled/Blocs';
import { ModalHeader } from './ModalHeader';

interface IProps {
  children: JSX.Element
}

const Portal: React.FC<IProps> = (
  { children }) => (ReactDOM.createPortal(children, document.getElementById('portal'))
);

export const ModalWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Portal>
      <StFlex
        width='100%'
        height="100%"
        top='0'
        position='absolute'
        background='rgba(0,0,0,.6)'
        jc="center"
        ai="center"
        flexDirection='column'
      >
        <ModalHeader headerKey='sdasda' />
        {children}
      </StFlex>
    </Portal>
  );
};
export default ModalWrapper;
