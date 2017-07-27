import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ board }) => (
    <Link to={`/boards/${board.id}`}>
      <div className="board-index-masonry-item-grid">
        <img src="http://res.cloudinary.com/leosoba/image/upload/v1501172669/board_item_backsize_nlrioy.png" alt="user-photo"/>
      </div>
    </Link>
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
