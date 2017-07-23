import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import NavBarForm from './nav_bar_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NavBarForm);
