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
    position        : 'fixed',
    justifyContent  : 'center',
    top             : '10%',
    left            : '30%',
    right           : '30%',
    // bottom          : '15%',
    border          : '2px solid white',
    background      : '#57bc90',
    borderRadius    : '25px',
    padding         : '20px',
    zIndex          : 11,
    overflow        : 'auto',
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

  render(){
    console.log(this.state);
    return (
      <div>
        <button onClick={this.modalSwitch}>Create Pin</button>
        <Modal className="modal-pin-create-all"
               isOpen={this.state.modalOpen}
               onRequestClose={this.modalSwitch}
               style={style}
               contentLabel="Modal Pin Create">
            <img className="modal-pin-create-img-close"
                 src="http://res.cloudinary.com/leosoba/image/upload/v1500988417/close_vxcbie.png"
                 onClick={this.modalSwitch} />
            <PinCreateContainer modalSwitch={this.modalSwitch}/>
        </Modal>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalPinCreate;
