import React from 'react';
import './Header.css';

function Header({ completed, total }) {
  return (
    <h2>
      {total
        ? `You have completed ${completed} of ${total} task`
        : 'Add a new Task'}
    </h2>
  );
}

export default Header;
