import { connect } from 'react-redux';
import MyLibrary from './my_library';
import { requestAllBoards } from '../../actions/board_actions';
// import { selectAllBoards } from '../../reducers/selectors';
import { values } from 'lodash';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  masters: values(session.currentUser.masters),
  disciples: values(session.currentUser.disciples)
});

const mapDispatchToProps = dispatch => ({
  requestAllBoards: () => dispatch(requestAllBoards())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MyLibrary);
