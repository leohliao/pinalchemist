import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => (
  <li className="board-item">
    <div className="board-item-div">
    <Link to={`/boards/${board.id}`}>
      <span> Title: { board.board_name } </span>
      <span> Descritption: {board.description }</span>
    </Link>
    </div>
  </li>
);// end BoardItem

export default BoardItem;

///make this into class, apply modal logic in here.
