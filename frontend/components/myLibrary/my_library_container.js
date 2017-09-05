import { connect } from 'react-redux';
import MyLibrary from './my_library';
import { requestAllBoards } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';

const mapStateToProps = ({session, boards, pins}) => ({
  currentUser: session.currentUser,
  boards,
  pins
});

const mapDispatchToProps = dispatch => ({
  requestAllBoards: () => dispatch(requestAllBoards())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(MyLibrary);
