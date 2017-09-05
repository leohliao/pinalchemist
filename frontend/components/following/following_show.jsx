import React from 'react';
import {values} from 'lodash';
import { withRouter, Link } from 'react-router-dom';

class FollowingShow extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor


  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.receiveSingleUser(nextProps.match.params.userId);
    }
  }

  render(){
    // const { masters, disciples } = this.props
    console.log(this.props);
    console.log("MASTERS " + Object.values(this.props.masters));
    console.log("DISCIPLES" + this.props.disciples);
    // console.log("CURRENTUSER " + this.props.currentUser);
    return(
      <div>
        <h1>This is following</h1>
      </div>
    );//end return
  }//end render
}// end class FollowShow

export default FollowingShow;
