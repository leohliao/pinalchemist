import { connect } from 'react-redux';
import { startFollowing, endFollowing } from '../../actions/follow_actions';
import FollowShow from './follow_show';
import { values } from 'lodash';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    masters: values(state.session.currentUser.masters),
    disciples: values(state.session.currentUser.disciples)
  })
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'followings') ? followings : followers;
  return {
    startFollowing: (follower) => dispatch(startFollowing(follower)),
    endFollowing: (follow) => dispatch(endFollowing(follower)),
    processForm: (user) => dispatch(processForm(user)),
    formType
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FollowShow);
