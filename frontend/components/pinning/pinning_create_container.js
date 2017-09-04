import { connect } from 'react-redux';
import PinningCreate from './pinning_create';
import { createPinning, deletePinning, deletePinningInPinDiffBoard, deletePinningInPinSameBoard } from '../../actions/pinning_actions';
import { resetBoard, requestUserBoards, receiveSingleBoard } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  boards: selectAllBoards(state),
  // errors: state.errors
  currentUser: state.session.currentUser,
  currentUser_id: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  requestUserBoards: userId => dispatch(requestUserBoards(userId)),
  createPinning: pinning => dispatch(createPinning(pinning)),
  deletePinning: pinning => dispatch(deletePinning(pinning)),
  resetBoard: () => dispatch(resetBoard()),
  deletePinningInPinDiffBoard: pinning => dispatch(deletePinningInPinDiffBoard(pinning)),
  deletePinningInPinSameBoard: pinning => dispatch(deletePinningInPinSameBoard(pinning))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinningCreate);
