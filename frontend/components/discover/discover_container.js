import { connect } from 'react-redux';
import Discover from './discover_view';
import { selectAllPins } from '../../reducers/selectors';

const mapStateToProps = ({session}, state) => ({
  currentUser: session.currentUser,
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
