import React from 'react';
import './Item.css';
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai';

function Item({ item, onCompleted, onDelete }) {
  const { text, completed } = item;
  return (
    <>
      <span
        className={completed ? 'green' : ''}
        onClick={() => onCompleted(item)}
      >
        <AiOutlineCheckSquare />
      </span>
      <p className={completed ? 'line' : ''}>{text}</p>
      <span onClick={() => onDelete(item)}>
        <AiOutlineCloseSquare />
      </span>
    </>
  );
}

export default Item;

//FaCircleCheck
