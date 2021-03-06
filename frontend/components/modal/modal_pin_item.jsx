
import React from 'react';
import Modal from 'react-modal';
import PinShowContainer from '../pin/pinShow/pin_show_container.js';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(100, 100, 100, 0.8)',
    zIndex          : 10,
    overflowY       : 'hidden',
    overflow        : 'hidden',
  },
  content : {
    position        : 'flex',
    justifyContent  : 'center',
    margin          : '15px auto 20px auto',
    maxWidth        : '53vw',
    height          : 'auto',
    // minHeight       : '75vh',
    border          : '4px solid white',
    background      : '#57bc90',
    borderRadius    : '8px',
    padding         : '10px',
    zIndex          : 11,
    overflow        : 'auto',
    opacity         : 0,
    transition      : 'opacity 0.3s'
  }
};

class ModalPinItem extends React.Component {
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
    const { pin } = this.props;
    return (
      <div>
        <div onClick={this.modalSwitch}
                className="modal-pin-item-button">
          <img src={pin.image_url}
               className="modal-pin-item-img">
          </img>
        </div>
        <Modal className="modal-pin-item"
               isOpen={this.state.modalOpen}
               onRequestClose={this.modalSwitch}
               onAfterOpen={this.onAfterOpen}
               style={style}
               contentLabel="Modal Pin Item">
         <PinShowContainer modalSwitch={this.modalSwitch}
                           id={pin.id}
                           className="modal-pin-show"/>
        </Modal>

      </div>
    );
  }//end render
}//end ModalPinItem

export default ModalPinItem;
