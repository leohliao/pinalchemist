import React from 'react';
import { values, merge } from 'lodash';
import PinningCreateContainer from '../../pinning/pinning_create_container';

class PinShow extends React.Component {
  constructor(props){
    super(props);

    this.switchOff = this.switchOff.bind(this);
    this.update = this.update.bind(this);
    this.removePin = this.removePin.bind(this);
  }//end constructor

  removePin(e){
    e.preventDefault();
    if (this.props.pin.user_id === this.props.currentUser_id ){
      this.props.deletePin(this.props.pin.id)
        .then(() => this.props.modalSwitch());
    } else {
      alert("You are not authorized to delete this pin!");
    }
  }//end removePin

  switchOff(){
    this.props.modalSwitch();
  }

  //change the value of the input field
  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }//end update

  render(){
    const { pin } = this.props;
    const deletePinbutton = (pin.user_id === this.props.currentUser_id ?
        <div className="pin-show-form-delete">
         <h6 onClick={this.removePin}>DELETE PIN!</h6>
        </div> : "")

    return (
      <div className="pin-show-all">

          <img className="modal-pin-show-img-close"
             src="http://res.cloudinary.com/leosoba/image/upload/v1500988417/close_vxcbie.png"
             onClick={this.switchOff} />

        <img className='pin-show-form-img'
               src={pin.image_url}
               alt={pin.title}/>

          <div className='pin-show-form-info'>
            <div className='pin-show-form-info-left'>
              <h2>Title:</h2>
              <h2>Description:</h2>
            </div>
            <div className='pin-show-form-info-right'>
              <h2>{pin.title}</h2>
              <h2>{pin.description}</h2>
            </div>
          </div>

          <div className="pin-show-pin-info">
            <div className="pin-show-pin-info-author-image">
              <img src= {pin.author_image_url} />
            </div>
            <div className="pin-show-pin-info-text" >
              <h1>By author:</h1>
              <h1>{pin.author}</h1>
            </div>
            <div className='pin-show-form-user-tools'>
              <PinningCreateContainer pin={pin}/>
              { deletePinbutton }
            </div>
          </div>
      </div>
    );//end return
  }//end render
}//end PinShowForm

export default PinShow;
