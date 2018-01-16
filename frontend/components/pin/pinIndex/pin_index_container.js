import { connect } from 'react-redux';
import * as pinActions from '../../../actions/pin_actions';
import PinIndexForm from './pin_index_form';
import { selectAllPins } from '../../../reducers/selectors';

const mapStateToProps = state => {
  return {
    pins: selectAllPins(state),
    board: state.board,
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPins: () => dispatch(pinActions.requestAllPins()),
    clearErrors: () => dispatch(pinActions.clearErrors())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PinIndexForm);
