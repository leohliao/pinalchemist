import { connect } from 'react-redux';
import { startFollowing, endFollowing } from '../../actions/follow_actions';
import { requestSingleUser } from '../../actions/user_actions';
import FollowingShow from './following_show';
import { values } from 'lodash';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  masters: session.currentUser.masters,
  disciples: session.currentUser.disciples
});

const mapDispatchToProps = (dispatch) => {
  return {
    startFollowing: (follower) => dispatch(startFollowing(follower)),
    endFollowing: (follow) => dispatch(endFollowing(follower)),
    requestSingleUser: (id) => dispatch(requestSingleUser(id))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FollowingShow);
