import React from 'react';
import { createRoot } from 'react-dom/client';

import { MultipleCustomHooks } from './MultipleCustomHooks';

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render( <MultipleCustomHooks />);

