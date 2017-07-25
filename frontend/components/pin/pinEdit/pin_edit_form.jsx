import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      currentUser: this.props.currentUser.username,
      image_url: this.props.pins.image_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }//end constructor

  update(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }//end update

  handleSubmit(e){
    e.preventDefault();
    const pin = this.state;
    this.props.editPin(pin);
    this.props.modalSwitch();
  }//end handleSubmit

  render(){
    return(
      <div>
        <h1>Edit Pin</h1>
        <form className="pin-edit-form"
              onSubmit={this.handleSubmit}>

              <label>Title
                <input type="text"
                       onChange={this.update('title')}
                       value={this.state.title}/>
              </label>

              <input className="pin-edit-sumbit"
                     type="submit"
                     value="Create"/>

              <div>
                  <img src={this.state.image_url}/>
              </div>

              <label>Description
                <input type="textarea"
                       onChange={this.update('description')}
                       value={this.state.description}/>
              </label>
        </form>

        <button onClick={this.removePin}>Remove Pin</button>
        <h1>{ this.state.currentUser }</h1>
      </div>
    );//end return
  }//end render
}//end PinEditForm

export default PinEditForm;
