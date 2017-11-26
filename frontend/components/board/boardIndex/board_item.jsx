import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => (

<div className="modal-board-form-container" >
    <Link to={`/boards/${board.id}`} >
      <div className="modal-board-thumbnail-container">
        <div>
          <h1>{board.board_name}</h1>
        </div>
      </div>
    </Link>
</div>

);// end BoardItem

export default BoardItem;
