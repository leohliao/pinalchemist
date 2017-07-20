
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
    }

    //this ensure that we will constantly receive log-in information
    componentWillReceiveProps(nextProps) {
      console.log("session-form-view" + nextProps);
      if (nextProps.loggedIn) {
        this.props.history.push('/');
      }
    }//componentWillReceiveProps

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
      if (this.props.formType === 'login') {
        return (
          <div className="session-form-nav">
            <br />
            <h3>Don't Have An Account Yet? </h3>
            <Link className="session-form-nav-link" to="/signup">Sign Up Here</Link>
          </div>
        );
      } else {
        return (
          <div className="session-form-nav">
            <br />
            <h3>Already Have An Account? </h3>
            <Link className="session-form-nav-link" to="/login">Log In Here</Link>
          </div>
      );
      }
    }//navLink

    //demo Login
    ghostLogin(e) {
      e.preventDefault();
      this.props.ghostLogin( {user: {username:"guest", password:"iamdemo"}} );
    }

    renderErrors(){
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
      const navConvert = (this.props.formType === 'login') ? "sign up" : "log in";
      const submitText = (this.props.formType === 'login') ? "LOG ME IN" : "SIGN UP";

      console.log("this.state.username = " + this.props);
      console.log("this.props.formType = " + this.props.formType);

      return (
        <main className="session-form-view">
          <section className="session-form-container">

            <form className="session-form" onSubmit={this.handleSubmit}>

            <div className="session-form-logo-image">
              <img src="https://cdn.shopify.com/s/files/1/0739/1565/files/auto-alchemist-logo-circle-500px_large.png?6691131145183734122" />
            </div>
            <div className="session-credential-form">
                <label>
                  <input type="text"
                         value={this.state.username}
                         placeholder={usernamePlaceholder}
                         onChange={this.update(`username`)}
                         className="session-input"/>
                </label>
                <label>
                  <input type="password"
                         value={this.state.password}
                         placeholder={passwordPlaceholder}
                         onChange={this.update(`password`)}
                         className="session-input"/>
                </label>
                <button type="submit"
                        className="session-form-submit-button"><span>{submitText}</span></button>

                      <h3 className="session-form-message">Please { messageConvert } or { navConvert }</h3>
                      <div>{this.navLink()}</div>
              {this.renderErrors()}
              </div>

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
