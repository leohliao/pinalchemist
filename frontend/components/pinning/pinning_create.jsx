import React from 'react';
import ReactDOM from 'react-dom';
import ModalBoardForm from '../board/boardForm/board_form_container';

class PinningCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_id: null,
      board_id: null,
      wating: true
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.createNewBoardModal = this.createNewBoardModal.bind(this)
  }

  componentDidMount() {
    this.props.requestUserBoards(this.props.currentUser_id)
    .then(() => this.setState({
      waiting: false}));
  }

  componentDidUpdate() {
    this.props.createPinning(this.state);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      pin_id: this.props.pin.id,
      board_id: e.currentTarget.value
    });
  }

  createNewBoardModal(){
    console.log(this.props);
    return (
      <div className="create">
        <ModalBoardForm small={true} currentUserImage={this.props.currentUser.image_url}/>
      </div>
    )
  }

  render() {
      console.log(this.props);
    const { pin, boards } = this.props;
    const className = this.state.clicked ? 'click-state' : 'base-state';

    const pinningButton = boards.map((board) => (
      <li className={className}
          key={board.id}
          onClick={this.handleClick}>
          {board.board_name}
      </li>
    ));
    if (this.state.waiting) {
      return (
        <div> loading... </div>
      );
    } else {
    return (
      <div className="dropdown">
        <div className="dropbtn">PIN TO BOARDS!</div>
        <div className="dropdown-content">
          <li >
              {this.createNewBoardModal()}
          </li>
          {pinningButton}
        </div>
      </div>
    );
  }
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
