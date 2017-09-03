import { connect } from 'react-redux';
import { requestSinglePin, deletePin, editPin } from '../../../actions/pin_actions';
import { createPinning, deletePinning } from '../../../actions/pinning_actions';
import PinShow from './pin_show';

//ownProps comes from modal_pin_item
const mapStateToProps = ({ session, pins }, ownProps ) => {
  return ({
    currentUser: session.currentUser.username,
    currentUser_id: session.currentUser.id,
    errors: pins.errors,
    pin: pins.pins[ownProps.id]
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id)),
  editPin: (pin) => dispatch(editPin(pin)),
  deletePin: (id) => dispatch(deletePin(id))

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
