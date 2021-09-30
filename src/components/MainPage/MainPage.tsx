import React from 'react';
import { useDispatch } from 'react-redux';

import { notesInitAction } from '@store/notes/actions';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(notesInitAction());

  return (
    <div />
  );
};

export default MainPage;
