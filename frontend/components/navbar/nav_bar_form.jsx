import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ModalPinCreate from '../modal/modal_pin_create';
import Search from '../search/search_container';
import Discover from '../discover/discover_view';

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
      <section >
        <div className="nav-bar-all">
          <div>
            <Link className="nav-bar-home-page" to="/">
              <img src="http://res.cloudinary.com/leosoba/image/upload/v1500790014/pinalchemist_logo_500x700_jssn0n.png" alt="Home" />
            </Link>
          </div>
          <Search />
          <div className="nav-bar-discover-ideas" >
            <Link to="/discover">
              <p>Discover Ideas</p>
            </Link>
          </div>
          <div>
            <Link className="nav-bar-my-board" to={`/${this.props.currentUser.id}/boards`}>
            <img src="http://res.cloudinary.com/leosoba/image/upload/v1500795506/my_board_256_x_256_pzqgyo.png" alt="My Boards" />
            </Link>
          </div>
          <div className="nav-bar-log-out"
               onClick={this.currentUserLogOut}>
               <img src="http://res.cloudinary.com/leosoba/image/upload/v1504344856/log_out_mklhiy.png" alt="Log Out" />
          </div>
          <ModalPinCreate />
        </div>
      </section>
    );//end return
  }//end render
}//end NavBarform

export default NavBarForm;
