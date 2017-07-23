import { connect } from 'react-redux';
import { createPin, clearErrors } from '../../../actions/pin_actions';
import PinCreateForm from './pin_create_form';


const mapStateToProps = ({ session, pins }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createPin: (pin) => dispatch(createPin(pin)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinCreateForm);
