import React from 'react';
import { NavLink, Link, withRouter, Route } from 'react-router-dom';
import BoardIndexContainer from '../board/boardIndex/board_index_container';
import BoardPinIndexContainer from '../board/boardPinIndex/board_pin_index_container';
import BoardShowContainer from '../board/boardShow/board_show_container';
import FollowerShowContainer from '../following/follower_show_container';
import FollowingShowContainer from '../following/following_show_container';

class MyLibrary extends React.Component {
  constructor(props){
    super(props);
  }//end constructor

  render (){
    // console.log(this.props.masters);
    return(
      <div className="my-library-form-all">

        <div className="my-library-form-user">
            <div className="my-library-user-photo">
              <img src={this.props.currentUser.image_url} alt="user-photo"/>
            </div>

            <div className="my-library-user-info">
              <div className="my-library-user-info-absolute">
                <div className="my-library-user-username">
                <h1>{this.props.currentUser.username}</h1>
                <h2>{this.props.currentUser.description}</h2>
                </div>

                <div className="my-library-user-separator" />

                <div className="my-library-user-links">
                  <NavLink activeClassName="my-library-links-boards-active" to={`/${this.props.currentUser.id}/boards`}>
                    <h1>Boards</h1>
                  </NavLink>
                  <NavLink activeClassName="my-library-links-pins-active" to={`/${this.props.currentUser.id}/pins`}>
                    <h1>Pins</h1>
                  </NavLink>
                  <NavLink activeClassName="my-library-links-followings-active" to={`/${this.props.currentUser.id}/followings`}>
                    <h1>Followings</h1>
                  </NavLink>
                  <NavLink activeClassName="my-library-links-followers-active" to={`/${this.props.currentUser.id}/followers`}>
                    <h1>Followers</h1>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="my-library-follows">
              <div className="my-library-follow-wrapper">
                <h1>Following:</h1>
                <h3>{this.props.masters.length}</h3>
                <br />
                <h1>Followers:</h1>
                <h3>{this.props.disciples.length}</h3>
              </div>
            </div>
        </div>
        
        <div className="my-library-form-board-index">
          <Route exact path="/:userId/boards" component={ BoardIndexContainer }/>
          <Route exact path="/boards/:id" component={ BoardShowContainer }/>
          <Route exact path="/:userId/pins" component={ BoardPinIndexContainer } />
          <Route exact path="/:userId/followings" component={ FollowingShowContainer } />
          <Route exact path="/:userId/followers" component={ FollowerShowContainer } />
        </div>
      </div>
    );//end return
  }//end render
}//end homeForm

export default withRouter(MyLibrary);

// <Route exact path="/followers" component={ FollowShowContainer }/>
