
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
    }

    //this ensure that we will constantly receive log-in information
    componentWillReceiveProps(nextProps) {
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
      this.props.processForm(user);
    }

    navLink() {
      if (this.props.formType === 'login') {
        return (
          <div>
            <h3>Don't Have An Account Yet? Create Here</h3>
            <Link to="/signup">Sign Up</Link>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Already Have An Account? Login In Here</h3>
            <Link to="/login">Log In</Link>
          </div>
      );
      }
    }//navLink

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
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Log In</h1>
            <br />
            Please {this.props.formType} or {this.navLink()}
            {this.renderErrors()}
            <div>
              <br />
              <label>Username:
                <input type="text"
                       value={this.state.username}
                       onChange={this.update(`username`)} />
              </label>
              <br />
              <label>Password:
                <input type="password"
                       value={this.state.password}
                       onChange={this.update(`password`)} />
              </label>
              <br />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );//return end
    }//render end
}//class end

export default withRouter(SessionForm);
