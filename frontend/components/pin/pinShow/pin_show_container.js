import { connect } from 'react-redux';
import { requestSinglePin, deletePin } from '../../../actions/pin_actions';
import PinShowForm from './pin_show_form';

const mapStateToProps = ({ session, pins }, ownProps ) => {
  return ({
    currentUser: session.currentUser.username,
    errors: pins.errors,
    pin: pins.pins[ownProps.id]
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id)),
  deletePin: (id) => dispatch(deletePin(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShowForm);
