import { connect } from 'react-redux';
import * as pinActions from '../../../actions/pin_actions';
import BoardPinIndexForm from './board_pin_index_form';
import { selectBoardPins } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  pins: selectBoardPins(state),
});

const mapDispatchToProps = dispatch => {
  return {
    requestAllPins: () => dispatch(pinActions.requestAllPins()),
    clearErrors: () => dispatch(pinActions.clearErrors())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardPinIndexForm);
