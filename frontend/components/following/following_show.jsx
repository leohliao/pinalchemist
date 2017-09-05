import React from 'react';
import Masonry from 'react-masonry-component';
import { withRouter, Link } from 'react-router-dom';

class FollowingShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnfollow = this.handleUnfollow.bind(this);
  } // end constructor

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.userId !== nextProps.match.params.userId) {
  //     this.props.receiveSingleUser(nextProps.match.params.userId);
  //   }
  // }
  //
  handleUnfollow(e) {
    e.preventDefault();
    let userId = parseInt(this.props.currentUser.id);
    let masterId = parseInt(e.currentTarget.value);
    let following = { follower: {follower_id: userId, following_id: masterId }};
    this.props.endFollowing({following});
  }

  render(){
    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
        };

        console.log(this.props);

    const allMasters = this.props.masters.map ((master) => (
      <li key={master.id} className="following-show-li-items">
        <Link to={`/${master.id}/boards`} >
        <div className="following-show-li-img">
          <img src={master.image_url}></img>
        </div>
        <div className="following-show-li-info">
          <h1>{master.username}</h1>
          <button onClick={this.handleUnfollow} value={master.id}>
            unfollow
          </button>
        </div>
        </Link>
      </li>
    ));

    return(
      <div className="following-show-all">
        <h1 className="following-show-title">
          Following:
        </h1>

        <Masonry className={'following-show-masonry'}
                 elementType={'ul'}
                 options={masonryOptions}
                 disableImagesLoaded={false}
                 updateOnEachImageLoad={false}>
          { allMasters }
        </Masonry>
      </div>
    );//end return
  }//end render
}// end class FollowShow

export default FollowingShow;
