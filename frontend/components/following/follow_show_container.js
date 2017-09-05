import { connect } from 'react-redux';
import { startFollowing, endFollowing } from '../../actions/follow_actions';
import FollowShow from './follow_show';

const mapStateToProps = (state) => {
  return ({
    currentUser: session.currentUser,
  })
};

const mapDispatchToProps = dispatch => ({
  startFollowing: (follower) => dispatch(startFollowing(follower)),
  endFollowing: (follow) => dispatch(endFollowing(follower))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FollowShow);
