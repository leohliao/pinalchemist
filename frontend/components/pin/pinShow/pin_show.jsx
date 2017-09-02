import React from 'react';

class PinShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentUser_id: this.props.currentUser_id,
      pin: this.props.pin
    };

    this.switchOff = this.switchOff.bind(this);
    this.update = this.update.bind(this);
    this.removePin = this.removePin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }//end constructor

  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.id !== nextProps.match.params.id){
  //     this.props.requestSinglePin(nextProps.match.params.id);
  //   }
  // }//end componentWillReceiveProps

  removePin(e){
    e.preventDefault();
    if (this.props.pin.user_id === this.props.currentUser_id ){
      this.props.deletePin(this.props.pin.id)
        .then(() => this.props.close())
        .then(() => this.props.history.go(-1))
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

  //click to handle all forms information
  handleSubmit(e){
    e.preventDefault();
    const pin = this.state;
    if (this.props.pin.user_id === this.props.currentUser_id){
      this.props.editPin(pin);
      this.props.modalSwitch();
    } else {
      alert("You are missing title or actual image!");
    }
  }

  render(){
    const { pin } = this.props;
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
              <h1>{pin.author}</h1>
              <p>{pin.author.description}</p>
            </div>
            
          </div>



      </div>
    );//end return
  }//end render
}//end PinShowForm

export default PinShow;

// <div className='pin-show-form-user-tools'>
//   { this.props.pin.user_id === this.props.currentUser_id ?
//     <div className="pin-show-form-delete">
//      <img
//        src="http://res.cloudinary.com/leosoba/image/upload/v1501017415/delete_pin_p3tmp1.png"
//        onClick={this.removePin}/>
//      <h6>DELETE PIN</h6>
//   </div> : "" }
// </div>
