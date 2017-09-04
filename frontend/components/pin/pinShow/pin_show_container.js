import { connect } from 'react-redux';
import { requestSinglePin, deletePin, editPin } from '../../../actions/pin_actions';
import { createPinning, deletePinning, deletePinningInPinDiffBoard, deletePinningInPinSameBoard } from '../../../actions/pinning_actions';
import { requestSingleBoard } from '../../../actions/board_actions';
import { requestSingleUser } from '../../../actions/user_actions';
import { selectAllBoards } from '../../../reducers/selectors';
import PinShow from './pin_show';

//ownProps comes from modal_pin_item
const mapStateToProps = ({ session, pins }, ownProps ) => {
  return ({
    currentUser: session.currentUser,
    currentUser_id: session.currentUser.id,
    errors: pins.errors,
    pin: pins.pins[ownProps.id],
    boards: selectAllBoards(session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  editPin: (pin) => dispatch(editPin(pin)),
  deletePin: (id) => dispatch(deletePin(id)),
  requestSinglePin: (id) => dispatch(requestSinglePin(id)),
  createPinning: (pinning) => dispatch(createPinning(pinning)),
  requestSingleUser: (id) => dispatch(requestSingleUser(id)),
  requestSingleBoard: (id) => dispatch(requestSingleBoard(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
