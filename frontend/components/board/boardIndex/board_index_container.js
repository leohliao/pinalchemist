import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { requestAllBoards } from '../../../actions/board_actions';
import { selectAllBoards } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.username,
    boards: selectAllBoards(state),
    state
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllBoards: () => dispatch(requestAllBoards())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
