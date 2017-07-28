import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndex from '../board/boardIndex/board_index_container';

class MyLibrary extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

  }//end constructor
  render (){
    return(
      <div className="my-library-form-all">

        <div className="my-library-form-user">
            <div className="my-library-user-photo">
              <img src="http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg" alt="user-photo"/>
            </div>

            <div className="my-library-user-info">
              <div className="my-library-user-info-absolute">
                <div className="my-library-user-username">
                <h3>Welcome, </h3>
                <h1>{this.props.currentUser}</h1>
                </div>

                <div className="my-library-user-separator" />

                <div className="my-library-user-links">
                <h1>Boards</h1>
                <h1>Pin</h1>
                <h1>Followers</h1>
                <h1>Following</h1>
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
        </div>

        <div className="my-library-form-board-index">
          < BoardIndex />
        </div>

      </div>
    );//end return
  }//end render
}//end homeForm

export default withRouter(MyLibrary);
