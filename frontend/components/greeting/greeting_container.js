// If the user is logged in, then the Greeting should contain:
//
// A welcome message including the user's username
// A button to logout
// If the user is not logged in, then the Greeting should contain:
//
// A <Link to> /#/signup
// A <Link to> /#/login

import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Greeting from './greeting_view';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
