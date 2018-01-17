import React from 'react';
import Masonry from 'react-masonry-component';
import { withRouter, Link } from 'react-router-dom';
import {values} from 'lodash';

class FollowerShow extends React.Component {
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
    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
        };
        
    const allMasters = this.props.disciples.map ((disciple) => {
        return (
        <li key={disciple.id} className="following-show-li-items">
          <Link to={`/${disciple.id}/boards`} >
          <div className="following-show-li-img">
            <img src={disciple.image_url}></img>
          </div>
          <div className="following-show-li-info">
            <h1>{disciple.username}</h1>
          </div>
          </Link>
        </li>
      );
    });

    return(
      <div className="following-show-all">
        <h1 className="following-show-title">
          Followers:
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

export default FollowerShow;
