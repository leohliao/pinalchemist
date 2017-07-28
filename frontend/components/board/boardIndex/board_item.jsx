import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => (

<div className="modal-board-form-container" >
    <Link to={`/boards/${board.id}`}>
      <div className="modal-board-thumbnail-container">
        <div>
          <h1>{board.board_name}</h1>
        </div>
      </div>
    </Link>
</div>

);// end BoardItem

export default BoardItem;

///make this into class, apply modal logic in here.



  // <span> Title: { board.board_name } </span>
  // <li className="board-index-masonry-ul-li-add-boards">
  //     <img src="http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg" alt="user-photo"/>
  // </li>

  // .board-index-masonry-ul-li-add-boards img {
  //   width: 260px;
  //   border-radius: 10px;
  //
  // }
  // <img src="http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg" alt="user-photo"/>
