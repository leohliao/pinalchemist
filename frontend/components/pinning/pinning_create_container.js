import { connect } from 'react-redux';
import PinningCreate from './pinning_create';
import { createPinning, deletePinning } from '../../actions/pinning_actions';
import { requestUserBoards } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  // currentUser: state.currentUser,
  boards: selectAllBoards(state),
  // errors: state.errors
  currentUser: state.session.currentUser,
  currentUser_id: state.session.currentUser.id,
  // boards: selectAllBoards(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  requestUserBoards: userId => dispatch(requestUserBoards(userId)),
  createPinning: pinning => dispatch(createPinning(pinning)),
  deletePinning: pinning => dispatch(deletePinning(pinning))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinningCreate);
