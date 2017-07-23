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
      <div>
        <br />

        <div>
          <Link to="/"></Link>
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

        <button
          className="greeting-button"
          onClick={this.currentUserLogOut}>
          Log Out
        </button>


      </div>
    );//end return
  }//end render
}//end NavBarform

export default NavBarForm;
