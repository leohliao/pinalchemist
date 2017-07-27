import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndex from '../board/boardIndex/board_index_container';

class MyLibrary extends React.Component {
  constructor(props){
    super(props);

  }//end constructor
  render (){
    return(
      <div className="my-library-form-all">

        <div className="my-library-user-photo">
          <img src="http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg" alt="user-photo"/>
        </div>

        <div className="my-library-user-info">
          <div className="my-library-user-info-absolute">
            <div className="my-library-user-username">
            <h1> This is my username</h1>
            </div>

            <div className="my-library-user-separator" />

            <div className="my-library-user-links">
            <span>Boards</span>
            <span>Pin</span>
            <span>Followers</span>
            <span>Following</span>
            </div>
          </div>
        </div>

        <div className="my-library-follows">
          <div className="my-library-follow-wrapper">
            <h1>Following</h1>
            <h3>#</h3>
            <br />
            <h1>Followers</h1>
            <h3>#</h3>
          </div>
        </div>

        <div>
          < BoardIndex />
        </div>

      </div>
    );//end return
  }//end render
}//end homeForm

export default withRouter(MyLibrary);
