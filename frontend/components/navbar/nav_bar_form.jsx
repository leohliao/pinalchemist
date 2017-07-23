import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBarForm extends React.Component {
  constructor(props){
    super(props);

    this.currentUserLogOut = this.currentUserLogOut.bind(this);
  }//end constructor

  currentUserLogOut(){
    this.props.logout();
  }

  render(){

    return (
      <section className="nav-bar-all">
        <br />

        <div>
          <Link className="nav-bar-home-page" to="/">
            <img src="http://res.cloudinary.com/leosoba/image/upload/v1500561470/pinalchemist_logo_xcqdgy.png" alt="Home" />
          </Link>
          &nbsp;
        </div>

        <div> {/*Search Start*/}
          <input className="nav-bar-search-input"
                 type="text"
                 autoComplete="off"
                 name="search"
                 placeholder="Search"/>
        </div>{/*Search End*/}


        <br />

        <div className="nav-bar-discover-ideas">
          <p>Discover Ideas</p>
        </div>

        <div className="nav-bar-my-board">
          <img src="http://res.cloudinary.com/leosoba/image/upload/v1500783568/my_board_tzeliu.png" alt="My Boards" />
        </div>

        <div
          className="nav-bar-log-out"
          onClick={this.currentUserLogOut}>
          <img src="http://res.cloudinary.com/leosoba/image/upload/v1500781700/log_out_z9akfd.png" alt="Log Out" />
        </div>


      </section>
    );//end return
  }//end render
}//end NavBarform

export default NavBarForm;
