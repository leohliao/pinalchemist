import { connect } from 'react-redux';
import { createBoard } from '../../../actions/board_actions';
import ModalBoardForm from './modal_board_form';

const mapStateToProps = ({session, boards }) => ({
  currentUser: session.currentUser.username,
  currentUserId: session.currentUser.id,
  boards
});

const mapDispatchToProps = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ModalBoardForm);
