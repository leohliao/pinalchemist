import React from 'react';

class PinShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      currentUser_id: this.props.currentUser_id,
      pin: this.props.pin
    };


    this.removePin = this.removePin.bind(this);
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

  render(){
    const { pin } = this.props;
    return (
      <div className="pin-show-all">
          <h1>{pin.title}</h1>
          <div className="pin-show-form-delete-all">
            <img className='pin-show-form-img'
               src={pin.image_url}
               alt={pin.title}
               onClick={this.handleSubmit}/>
             <img className="pin-show-form-delete"
               src="http://res.cloudinary.com/leosoba/image/upload/v1501017415/delete_pin_p3tmp1.png"
               onClick={this.removePin} />
          </div>
          <h3>{pin.description}</h3>
      </div>
    );//end return
  }//end render
}//end PinShowForm

export default PinShow;
