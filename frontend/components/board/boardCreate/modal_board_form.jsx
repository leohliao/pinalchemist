import React from 'react';
import Modal from 'react-modal';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(100, 100, 100, 0.8)',
    zIndex          : 10
  },
  content : {
    position        : 'flex',
    margin          : '35px auto 15px auto',
    width           : '30vw',
    minHeight       : '70vh',
    border          : '2px solid #57bc90',
    background      : 'white',
    borderRadius    : '8px',
    padding         : '15px',
    zIndex          : 11,
    overflow        : 'auto',
    opacity         : 0,
    transition      : 'opacity 0.3s'
  }
};

class ModalBoardForm extends React.Component {
  constructor(){
    super();
    this.state = {
      board_name: "",
      description: "",
      user_id: this.props.currentUser.
      modalOpen: false
    };

    this.modalSwitch = this.modalSwitch.bind(this);
  }//constructor

  modalSwitch(){
    this.setState({ modalOpen: !(this.state.modalOpen) });
  }//end modalSwitch

  onAfterOpen() {
  style.content.opacity = 100;
  }

  //change the value of the input field
  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }//end update

  handleSubmit(e){
    e.preventDefault();
    const pin = this.state;
    if (pin.image_url !=="" && pin.title !== ""){
      this.props.createPin(pin);
      this.props.modalSwitch();
    } else {
      alert("You are missing title or actual image!");
    }
  }

  render(){
    console.log(this.state);
    return (
      <div className="modal-pin-create-home-all">
        <div className="modal-pin-create-button-home" >
          <img src="http://res.cloudinary.com/leosoba/image/upload/v1501000287/add_kexojh.png"
               onClick={this.modalSwitch} />
        </div>
        <Modal className="modal-pin-create-all"
               isOpen={this.state.modalOpen}
               onRequestClose={this.modalSwitch}
               onAfterOpen={this.onAfterOpen}
               style={style}
               contentLabel="Modal Pin Create">

               <form className="pin-create-form-dropzone-form"
                     onSubmit={this.handleSubmit}>
                     <label className="pin-create-form-label" >
                       <input type="text"
                              placeholder="Create A Title"
                              onChange={this.update('title')}
                              value={this.state.title} required/>
                     </label>
                     <label className="pin-create-form-label">
                       <input type="textarea"
                              placeholder="Create A Description"
                              onChange={this.update('description')}
                              value={this.state.description}/>
                     </label>
                     <input className="pin-create-form-dropzone-submit"
                            type="submit"
                            value="CREATE!"/>
               </form>


        </Modal>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalBoardForm;
