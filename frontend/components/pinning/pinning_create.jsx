import React from 'react';
import ReactDOM from 'react-dom';

class PinningCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: null,
      board_id: null,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  //
  // componentDidMount() {
  //   this.props.requestUserBoards(this.props.currentUser.id)
  // }
  //
  // componentDidUpdate() {
  //   this.props.createPinning(this.state);
  // }
  //
  // handleClick(e) {
  //   e.preventDefault();
  //   this.setState({
  //     pin_id: this.props.pin.id,
  //     board_id: e.currentTarget.value
  //   });
  // }

  render() {
    // const className = this.state.clicked ? 'click-state' : 'base-state';
    // console.log(this.props);
    return (
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
         </div>
      </div>
    );
  }
}

export default PinningCreate;

// <div className="board-menu">
//   <ul className="dropdown-content">
//     <li><a href="#">Select a Board</a></li>
//     {this.props.boards.map((board, i) => {
//       return
//       <li className={className}
//           onClick={this.handleClick}
//           key={board.id}
//           value={board.id}>{board.title}
//       </li>;
//     })}
//   </ul>
// </div>
