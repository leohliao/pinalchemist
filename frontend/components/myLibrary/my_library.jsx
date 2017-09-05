import React from 'react';
import { NavLink, Link, withRouter, Route } from 'react-router-dom';
import BoardIndexContainer from '../board/boardIndex/board_index_container';
import BoardPinIndexContainer from '../board/boardPinIndex/board_pin_index_container';
import BoardShowContainer from '../board/boardShow/board_show_container';

class MyLibrary extends React.Component {
  constructor(props){
    super(props);
  }//end constructor

  render (){
    console.log(this.props);
    console.log(this.state);

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
          <Route exact path="/:userId/boards" component={ BoardIndexContainer }/>
          <Route exact path="/boards/:id" component={ BoardShowContainer }/>
          <Route exact path="/:userId/pins" component={ BoardPinIndexContainer }/>
        </div>

      </div>
    );//end return
  }//end render
}//end homeForm

export default withRouter(MyLibrary);
