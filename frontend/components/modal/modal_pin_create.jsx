import React from 'react';
import Modal from 'react-modal';
import PinCreateContainer from '../pin/pinCreate/pin_create_container.js';

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
    overflow        : 'hidden',
    opacity         : 0,
    transition      : 'opacity 0.3s'

  }
};

class ModalPinCreate extends React.Component {
  constructor(){
    super();
    this.state = {
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

  render(){
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

            <PinCreateContainer modalSwitch={this.modalSwitch}/>
        </Modal>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalPinCreate;
