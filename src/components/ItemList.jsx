import React from 'react';
import './ItemList.css';

function ItemList({ children }) {
  return <ul className='itemList'>{children}</ul>;
}

export default ItemList;
