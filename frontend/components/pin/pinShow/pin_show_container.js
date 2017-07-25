import { connect } from 'react-redux';
import { requestSinglePin } from '../../../actions/pin_actions';
import PinShowForm from './pin_show_form';

const mapStateToProps = ({ session, pins }, { match }) => {
  const pinID = match.params.id;
  return ({
    currentUser: session.currentUser.username,
    errors: pins.errors,
    pin: pins.pins[pinID],
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinShowForm);
