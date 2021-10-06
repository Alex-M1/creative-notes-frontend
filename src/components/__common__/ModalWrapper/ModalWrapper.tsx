import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { StFlex } from '../styled/Blocs';
import { ModalHeader } from './ModalHeader';

interface IPortal {
  children: JSX.Element
}

interface IProps {
  children: (onClose: () => void) => JSX.Element;
  headerKey: string;
  triggerKey: string;
}

const Portal: React.FC<IPortal> = (
  { children }) => (ReactDOM.createPortal(children, document.getElementById('portal'))
);

export const ModalWrapper: React.FC<IProps> = ({ children, headerKey, triggerKey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <>
      <Button onClick={handleOpen} translateKey={triggerKey} width="200px" />
      {isOpen
        ? (
          <Portal>
            <StFlex
              width='100%'
              height="100%"
              top='0'
              position='absolute'
              background='rgba(0,0,0,.6)'
              jc="center"
              ai="center"
            >
              <StFlex
                border="3px solid #fff"
                flexDirection="column"
                borderRadius="7px"
                background='rgba(0,0,0,.8)'
                minHeight="300px"
                minWidth="800px"
                padding="15px 30px"
              >
                <ModalHeader headerKey={headerKey} onClose={handleClose} />
                {children(handleClose)}
              </StFlex>
            </StFlex>
          </Portal >
        )
        : null}

    </>
  );
};
export default ModalWrapper;
