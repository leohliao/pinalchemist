import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { requestUserBoards } from '../../../actions/board_actions';
// import { selectAllBoards } from '../../../reducers/selectors';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});


const mapDispatchToProps = dispatch => {
  return {
  requestUserBoards: (userId) => dispatch(requestUserBoards(userId))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
