import { connect } from 'react-redux';
import { requestSinglePin } from '../../../actions/pin_actions';
import PinShowForm from './pin_show_form';

const mapStateToProps = ({ session, pins }) => {
  return ({
    currentUser: session.currentUser.username,
    errors: pins.errors,
    pin: pins.pins[pins.match.params.id]
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShowForm);
