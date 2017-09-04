import React from 'react';
import ReactDOM from 'react-dom';
import { values } from 'lodash';
import ModalBoardForm from '../board/boardForm/board_form_container';

class PinningCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handlePinning = this.handlePinning.bind(this);
    this.handleUnpinning = this.handleUnpinning.bind(this);
    this.createNewBoardModal = this.createNewBoardModal.bind(this)
  }

  componentWillMount() {
    this.props.requestUserBoards(this.props.currentUser_id);
  }

  componentWillUnmount() {
    this.props.resetBoard();
  }

  // componentDidMount() {
  //   this.props.requestUserBoards(this.props.currentUser_id)
  // }

  // componentDidUpdate() {
  //   this.props.requestUserBoards(this.props.currentUser_id);
  // }

  // componentWillUpdate(nextProps) {
  //   console.log(this.props.pin.pinned_boards);
  //   console.log(nextProps.pin.pinned_boards);
  //   if (JSON.stringify(this.props.pin.pinned_boards) === JSON.stringify(nextProps.pin.pinned_boards)) {
  //     this.props.requestUserBoards(this.props.currentUser_id);
  //   }
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.currentUser_id !== nextProps.currentUser_id) {
  //     this.props.requestUserBoards(nextProps.currentUser_id);
  //   }
  // }

  handlePinning(e) {
    e.preventDefault();
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(e.currentTarget.value);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.createPinning(pinning);
  }

  handleUnpinning(e) {
    e.preventDefault();
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(e.currentTarget.value);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.deletePinning(pinning);
  }

  createNewBoardModal(){
    return (
      <div className="create">
        <ModalBoardForm small={true} currentUserImage={this.props.currentUser.image_url}/>
      </div>
    )
  }

  render() {
    const { pin, boards } = this.props;
    const pinningButton = boards.map((board) => {
      if (values(pin.pinned_boards).includes(board.id)) {
        return (
          <li
              key={board.id}
              onClick={this.handleUnpinning}
              value={board.id}>
              <div className="pinning-create-button">
                <h6>pinned</h6>
                {board.board_name}
              </div>
          </li>
        );
      } else {
        return (
          <li className="pinning-create-button"
              key={board.id}
              onClick={this.handlePinning}
              value={board.id}>
              {board.board_name}
          </li>
        );
      }
    }) // end pinningButton

    console.log(this.props);
    return (
      <div className="dropdown">
        <div className="dropbtn">PIN TO BOARDS!</div>
        <div className="dropdown-content">
          <li>
              {this.createNewBoardModal()}
          </li>
          {pinningButton}
        </div>
      </div>
    );
  }
}

export default PinningCreate;
