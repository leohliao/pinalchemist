import React from 'react';
import ReactDOM from 'react-dom';
import { values } from 'lodash';
import ModalBoardForm from '../board/boardForm/board_form_container';

class PinningCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_id: null,
      board_id: null,
    };

    this.handlePinning = this.handlePinning.bind(this);
    this.handleUnpinning = this.handleUnpinning.bind(this);
    // this.handleCheckUnpinning = this.handleCheckUnpinning.bind(this);
    this.createNewBoardModal = this.createNewBoardModal.bind(this)
  }

  componentDidMount() {
    this.props.requestUserBoards(this.props.currentUser_id)
  }

  // componentWillMount() {
  //   this.props.requestSinglePin(this.props.id);
  //   this.props.match.params.userId ?
  //   this.props.requestSingleUser(this.props.match.params.userId) :
  //   this.props.requestSingleUser(this.props.currentUser.id);
  // }
  //
  // componentWillUnmount() {
  //   this.props.resetPin();
  // }
  //
  // componentWillMount() {
  //   this.props.requestUserBoards(this.props.currentUser_id);
  // }
  //
  // componentDidUpdate() {
  //   this.props.requestUserBoards(this.props.currentUser_id);
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   if (this.props.pin.id === nextProps.pin.id) {
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

//   handleCheckUnpinning(e) {
//     e.preventDefault();
//     let pinId = parseInt(this.props.pin.id);
//     let boardId = parseInt(e.currentTarget.value);
//     let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
//     this.props.match.params.boardId == boardId ?
//     this.props.deletePinningInPinSameBoard(pinning) :
//     this.props.deletePinningInPinDiffBoard(pinning);
// }

  createNewBoardModal(){
    console.log(this.props);
    return (
      <div className="create">
        <ModalBoardForm small={true} currentUserImage={this.props.currentUser.image_url}/>
      </div>
    )
  }

  render() {
    const { pin, boards } = this.props;
    console.log(pin.pinned_boards);

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

/////

// boards() {
//   let { pin, deletePin, currentUser, board, user } = this.props;
//
//   return (
//     values(currentUser.boards).map((board, idx) => {
//       if (values(pin.pinned_boards).includes(board.id)) {
//       return (
//         <button className="pin-button"
//           onClick={this.handleCheckUnpinning}
//           key={idx}
//           value={board.id}>{board.title}  ✔
//         </button>
//       )} else {
//       return(
//         <button className="pin-button"
//           key={idx}
//           onClick={this.handlePinning}
//           value={board.id}>{board.title}
//         </button>
//       );
//       }
//     })
//   )
// }
/////
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
//
// if (this.state.waiting) {
//    return (
//      <div></div>
//    );
//  }
//  const className = this.state.clicked ? 'click-state' : 'base-state';
//  return (
//    <div className="board-menu">
//      <ul className="dropdown-content">
//        <li><a href="#">Select a Board</a></li>
//        {this.props.boards.map((board, i) => {
//          return <li className={className} onClick={this.handleClick}
//            key={board.id} value={board.id}>{board.title}</li>;
//        })}
//      </ul>
//    </div>
//  );
// }
// }
