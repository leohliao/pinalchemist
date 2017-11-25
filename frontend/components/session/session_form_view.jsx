
// Invoke the processForm prop when the 'Submit' button is clicked.
//
// Define a helper method handleSubmit(e) like so:

// Pass it as a callback to your form's onSubmit.
// Render a "Log in" or "Sign up" header based on the formType prop.
//
// Provide a <Link to> to /#/signup or /#/login, whichever isn't the current address.
//
// Render a list of error messages if any are present.
//
// Redirect the user to the /#/ route if they are logged in. Don't forget to export the component withRouter!

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.ghostLogin = this.ghostLogin.bind(this);
      this.removeErrors = this.removeErrors.bind(this);
    }

    //this ensure that we will constantly receive log-in information
    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.props.history.push('/');
      }
    }//componentWillReceiveProps

    removeErrors() {
        this.props.clearSessionErrors();
    }

    update(field) {
      return event => this.setState({
        [field]: event.currentTarget.value
      });
    }//update

    handleSubmit(event) {
      event.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm({user});
    }

    navLink() {
      // this.props.clearErrors();
      if (this.props.formType === 'login') {
        return (
          <div className="session-form-nav">
            <br />
            <h3>Don't Have An Account Yet? </h3>
            <Link onClick={this.removeErrors} className="session-form-nav-link" to="/signup">Sign Up Here</Link>
          </div>
        );
      } else {
        return (
          <div className="session-form-nav">
            <br />
            <h3>Already Have An Account? </h3>
            <Link onClick={this.removeErrors} className="session-form-nav-link" to="/login">Log In Here</Link>
          </div>
      );
      }
      this.removeErrors();
    }//navLink

    //demo Login
    ghostLogin(e) {
      e.preventDefault();
      this.props.ghostLogin( {user: {username:"guest", password:"iamdemo"}} );
    }

    renderErrors(){
      // console.log(this.props);
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
              <li key={`error-${idx}`}>
                {error}
              </li>
          ))}
        </ul>
    );
    }//renderErrors

    render(){
      const usernamePlaceholder = (this.props.formType === 'login') ? "Username" : "Create Username";
      const passwordPlaceholder = (this.props.formType === 'login') ? "Password" : "Create Password";
      const messageConvert = (this.props.formType === 'login') ? "log in" : "sign up";
      const submitText = (this.props.formType === 'login') ? "LOG IN" : "SIGN UP";

      return (
        <main className="session-form-view">
          <section className="session-form-container">

            <form className="session-form" onSubmit={this.handleSubmit}>

            <div className="session-form-logo-image">
              <img src="http://res.cloudinary.com/leosoba/image/upload/v1500561470/pinalchemist_logo_xcqdgy.png" />
            </div>

            <div className="session-form-slogan">
              <h1>CHEMISTRY FOR CREATIVITY STARTS HERE</h1>
            </div>

            <div className="session-form-errors">
              {this.renderErrors()}
            </div>

            <div className="session-credential-form">
                <label>
                  <input type="text"
                         value={this.state.username}
                         placeholder={ usernamePlaceholder }
                         onChange={this.update(`username`)}
                         className="session-input"/>
                </label>
                <label>
                  <input type="password"
                         value={this.state.password}
                         placeholder={ passwordPlaceholder }
                         onChange={this.update(`password`)}
                         className="session-input"/>
                </label>

                <button type="submit"
                        className="session-form-submit-button"><span>{submitText}</span></button>

                      <h3 className="session-form-message">Please { messageConvert }</h3>
                      <div>{this.navLink()}</div>
              </div>{/* session-credential-form */}

              <div>
                <button className="session-form-demo" onClick={this.ghostLogin}><span>Demo</span></button>
              </div>


            </form>
          </section>
        </main>
      );//return end
    }//render end
}//class end

export default withRouter(SessionForm);
