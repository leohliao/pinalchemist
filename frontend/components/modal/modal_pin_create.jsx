import React from 'react';
import Modal from 'react-modal';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.8)',
    zIndex          : 10
  },
  content : {
    display         : 'flex',
    justifyContent  : 'center',
    left            : '32%',
    right           : '32%',
    border          : '1px solid #ccc',
    padding         : '10px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};

class ModalPinCreate extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOpen: false
    };
  }//constructor

  modalSwitch(){
    this.setState({ modalOpen: !(this.state.modalOpen) });
  }//end modalSwitch

  render(){
    console.log(this.state);
    return (
      <div>
        <h1>my modal</h1>
        <button onClick={this.modalSwitch}></button>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalPinCreate;
