import React from 'react';
import Modal from 'react-modal';
import PinEditContainer from '../pin/pinEdit/pin_edit_container.js';

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
    top             : '15%',
    left            : '25%',
    right           : '25%',
    bottom          : '25%',
    border          : '2px solid white',
    background      : '#57bc90',
    borderRadius    : '25px',
    padding         : '35px',
    zIndex          : 11,
    overflow        : 'auto',
  }
};

class ModalPinEdit extends React.Component {
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
        <Modal className="modal-pin-edit"
               isOpen={this.state.modalOpen}
               onRequestClose={this.modalSwitch}
               style={style}
               contentLabel="Modal Pin Edit">
               <PinEditContainer modalSwitch={this.modalSwitch}/>
          <button onClick={this.modalSwitch}>Close</button>
        </Modal>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalPinEdit;
