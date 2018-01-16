import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => (

<div className="modal-board-form-container" >
    <Link to={`/boards/${board.id}`} >
      <div className="modal-board-thumbnail-container">
          <h1>{board.board_name}</h1>
      </div>
    </Link>
</div>

);// end BoardItem

export default BoardItem;
