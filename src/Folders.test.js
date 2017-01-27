import React from 'react';
import ReactDOM from 'react-dom';
import Folders from './Folders';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Folders />, div);
});
