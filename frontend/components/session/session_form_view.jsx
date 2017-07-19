// The SessionFormContainer should provide SessionForm with the following props:
//
// From mapStateToProps(state, ownProps):
// loggedIn (boolean) - representing whether a currentUser exists
// errors (array) - list of errors from the state
// formType (string): 'login' or 'signup' given the current ownProps.location.pathname
// From mapDispatchToProps(dispatch, ownProps):
// processForm (function): dispatching action creators login or signup given formTypeΩ
