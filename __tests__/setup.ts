import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

React.useLayoutEffect = React.useEffect;

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('enzyme').configure({ adapter: new Adapter() });
