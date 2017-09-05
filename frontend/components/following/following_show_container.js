import { connect } from 'react-redux';
import { startFollowing, endFollowing } from '../../actions/follow_actions';
import FollowingShow from './following_show';
import { values } from 'lodash';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    masters: values(state.session.currentUser.masters),
    disciples: values(state.session.currentUser.disciples),
    state
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    startFollowing: (follower) => dispatch(startFollowing(follower)),
    endFollowing: (follow) => dispatch(endFollowing(follower)),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FollowingShow);
