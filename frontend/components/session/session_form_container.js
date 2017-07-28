// The SessionFormContainer should provide SessionForm with the
// following props:
//
// From mapStateToProps(state, ownProps):
// loggedIn (boolean) - representing whether a currentUser exists
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup' given the current

// ownProps.location.pathname
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators login or signup
// given formType

import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form_view';

const mapStateToProps = ({ session }) => ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
});

const mapDispatchToProps = (dispatch, { location } ) => {
    const formType = location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
        clearErrors: () => dispatch(clearErrors()),
        ghostLogin: user => dispatch(login(user)),
        processForm: user => dispatch(processForm(user)),
        formType
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);
