import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class MyLibrary extends React.Component {
  constructor(props){
    super(props);

  }//end constructor
  render (){
    return(
      <div className="my-library-form-all">

        <div className="my-library-photo-user">
          <img src="http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg" alt="user-photo"/>
        </div>

        <div className="my-library-user-info">
            <div className="my-library-user-username">
            <h1> This is my name</h1>
            </div>

            <div className="my-library-user-separator" />

            <div className="my-library-user-links">
            <span>Boards</span>
            <span>Pin</span>
            <span>Followers</span>
            <span>Following</span>
            </div>
        </div>

        <div className="my-library-follows">
          <h1>Following</h1>
          <h3>#</h3>
          <br />
          <h1>Followers</h1>
          <h3>#</h3>
        </div>

      </div>
    );//end return
  }//end render
}//end homeForm

export default withRouter(MyLibrary);
