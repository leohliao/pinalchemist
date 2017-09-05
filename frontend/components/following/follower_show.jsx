import React from 'react';

class FollowerShow extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.props.history.push('/');
    }
  }//componentWillReceiveProps

  render(){
    console.log("MASTERS " + this.props.masters);
    console.log("DISCIPLES" + this.props.disciples);
    console.log("CURRENTUSER " + this.props.currentUser);
    console.log("formType " + this.props.formType);
    return(
      <div>
        <h1>This is follower</h1>
      </div>
    );//end return
  }//end render
}// end class FollowShow

export default FollowerShow;
