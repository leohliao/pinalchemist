import { connect } from 'react-redux';
import PinningCreate from './pinning_create';
import { createPinning } from '../../actions/pinning_actions';
import { requestUserBoards } from '../../actions/board_actions';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  boards: state.boards,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestUserBoards: userId => dispatch(requestUserBoards(userId)),
  createPinning: pinning => dispatch(createPinning(pinning))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinningCreate);
