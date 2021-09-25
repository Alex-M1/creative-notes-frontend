import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

React.useLayoutEffect = React.useEffect;

configure({ adapter: new Adapter() });
