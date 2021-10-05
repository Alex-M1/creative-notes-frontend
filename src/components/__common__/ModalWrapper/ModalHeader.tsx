import React from 'react';
import { StGrid } from '../styled/Blocs';

interface IProps {
  headerKey: string;
}

export const ModalHeader: React.FC<IProps> = ({ headerKey }) => {
  return (
    <StGrid
      align="center"
      columns="4fr 1fr"
    >
      <h1>{headerKey}</h1>
      <span>X</span>
    </StGrid>
  );
};
