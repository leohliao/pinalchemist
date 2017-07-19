import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
    }

    handleSubmit(event) {
      event.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }



}//class end
