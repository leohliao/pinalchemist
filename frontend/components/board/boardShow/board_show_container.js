import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestSingleBoard, removeBoard } from '../../../actions/board_actions';
import { requestAllPins } from '../../../actions/pin_actions';
import { selectAllPins } from '../../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  const boardId = match.params.id
  const board = state.boards[boardId]
  const boardPins = board ? board.pin_ids : []

  return ({
    currentUser: state.session.currentUser,
    pins: selectAllPins(state),
    board,
    boardPins
  });
};

const mapDispatchToProps = dispatch => ({
  requestSingleBoard: (id) => dispatch(requestSingleBoard(id)),
  requestAllPins: () => dispatch(requestAllPins()),
  removeBoard: (id) => dispatch(removeBoard(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
