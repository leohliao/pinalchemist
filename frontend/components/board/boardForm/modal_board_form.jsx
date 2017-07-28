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
      user_id: null,
      modalOpen: false
    };

    this.modalSwitch = this.modalSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
    const board = this.state;
    board.user_id = this.props.currentUserId;
    this.props.createBoard(board);
    this.modalSwitch();
  }

  render(){
    return (
      <div className="modal-board-create-home-all">
        <div className="modal-board-thumbnail-container"
             onClick={this.modalSwitch}  >
             <div>
           <h1> Create A New Board </h1>
           </div>
        </div>
        <Modal className="modal-board-create-all"
               isOpen={this.state.modalOpen}
               onRequestClose={this.modalSwitch}
               onAfterOpen={this.onAfterOpen}
               style={style}
               contentLabel="Modal Board Create">

               <form className="board-create-form-"
                     onSubmit={this.handleSubmit}>
                     <label className="board-create-form-label" >
                       <input type="text"
                              placeholder="Create A Name for Your Board"
                              onChange={this.update('board_name')}
                              value={this.state.board_name} required/>
                     </label>

                     <label className="board-create-form-label">
                       <input type="textarea"
                              placeholder="Write A Description for Your Board"
                              onChange={this.update('description')}
                              value={this.state.description}/>
                     </label>
                     <input className="board-create-form-submit"
                            type="submit"
                            value="CREATE BOARD!"/>
               </form>

        </Modal>
      </div>
    );
  }//end render
}//end ModalPinCreate

export default ModalBoardForm;

// <img src="http://res.cloudinary.com/leosoba/image/upload/v1501172669/board_item_backsize_nlrioy.png"
