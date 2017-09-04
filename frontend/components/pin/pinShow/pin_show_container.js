import { connect } from 'react-redux';
import { requestSinglePin, deletePin, editPin } from '../../../actions/pin_actions';
import PinShow from './pin_show';

//ownProps comes from modal_pin_item
const mapStateToProps = ({ session, pins }, ownProps ) => {
  return ({
    currentUser: session.currentUser,
    currentUser_id: session.currentUser.id,
    errors: pins.errors,
    pin: pins.pins[ownProps.id],
  });
};

const mapDispatchToProps = dispatch => ({
  editPin: (pin) => dispatch(editPin(pin)),
  deletePin: (id) => dispatch(deletePin(id)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
