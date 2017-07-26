import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ModalPinCreate from '../modal/modal_pin_create';

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

        <Link className="nav-bar-home-page" to="/pins">
        <img src="http://res.cloudinary.com/leosoba/image/upload/v1500790014/pinalchemist_logo_500x700_jssn0n.png" alt="Home" />
        </Link>

        <input className="nav-bar-search-input"
               type="text"
               autoComplete="off"
               name="search"
               placeholder="Search"/>

        <div className="nav-bar-discover-ideas">
        <p>Discover Ideas</p>
        </div>

        <Link className="nav-bar-my-board" to="/mylibrary">
        <img src="http://res.cloudinary.com/leosoba/image/upload/v1500795506/my_board_256_x_256_pzqgyo.png" alt="My Boards" />
        </Link>

        <div className="nav-bar-log-out"
             onClick={this.currentUserLogOut}>
        <img src="http://res.cloudinary.com/leosoba/image/upload/v1500795169/log_out_omgkze.png" alt="Log Out" />
        </div>

        <ModalPinCreate />

      </section>
    );//end return
  }//end render
}//end NavBarform

export default NavBarForm;
