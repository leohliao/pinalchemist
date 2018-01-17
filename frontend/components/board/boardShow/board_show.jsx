import React from 'react';
import { values } from 'lodash';
// import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
// import { Link } from 'react-router-dom';
// import BoardItem from './board_item';
// import ModalBoardForm from '../boardForm/board_form_container';
import ModalPinItem from '../../modal/modal_pin_item';
import BoardPinIndexForm from '../boardPinIndex/board_pin_index_form'

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBoard = this.deleteBoard.bind(this);
  }//end constructor

  deleteBoard(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
    this.props.removeBoard(this.props.board.id);
  }//deleteBoard

  render(){
    let { currentUser } = this.props;
    let boardID = this.props.match.params.id;
    let boardName = currentUser.boards[boardID].board_name;
    let pins = currentUser.boards[boardID].pins;

    // console.log(boardName);
    // console.log(pins);
    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
          transitionDuration: 1.5,
          postion: 'center',
          // percentPosition: true,
    };
    //
    // let filteredPins;
    // if(this.props){
    //   console.log(this.props);
    //   // const filteringPins = pins.filter((pin) => this.props.pins.pinned_boards.includes(board.id));
    //   const filteringPins = this.props.pins
    //   if (filteringPins) {
    //     filteredPins = filteringPins;
    //   }
    // }
    // <img src={pin.image_url} alt={pin.title} />
    // const havePins = filteredPins.reverse().map( pin => (
    //   <div className="board-index-masonry-ul-li" key={pin.id} >
    //     <div className="modal-board-form-container" >
    //         <div className="modal-board-thumbnail-container-show">
    //           <div>
    //             <ModalPinItem pin={pin}/>
    //           </div>
    //         </div>
    //
    //     </div>
    //   </div>
    // ));

    return(
      <div className="board-show-all">
        <h1 className="following-show-title"> { boardName }</h1>
        <BoardPinIndexForm pins={pins} />
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardShow;

// <h1>{this.props.board.board_name}</h1>
//   <Masonry className={'board-index-masonry'}
//            elementType={'ul'}
//            options={masonryOptions}
//            disableImagesLoaded={false}
//            updateOnEachImageLoad={false}>
//       { havePins }
//   </Masonry>
