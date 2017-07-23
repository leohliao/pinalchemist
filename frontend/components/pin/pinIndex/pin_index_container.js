import { connect } from 'react-redux';
import * as pinActions from '../../../actions/pin_actions';
import PinIndexForm from './pin_index_form';

const mapStateToProps = ({ pins }) => {
  return {
    pins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(pinActions.requestAllPins()),
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinIndexForm);
