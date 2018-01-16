import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import BoardItem from './board_item';
import ModalBoardForm from '../boardForm/board_form_container';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

  }//end constructor

  // componentWillMount(){
  //   this.props.requestUserBoards(this.props.currentUser.id);
  // }
  //
  // componentDidMount(){
  //   this.props.requestUserBoards(this.props.currentUser.id);
  // }//end componentDidMount
  handleCreateBoard(){
    return(
      <div className="modal-board-thumbnail-container">
        <ModalBoardForm currentUserImage={this.props.currentUser.image_url}/>
      </div>
    )
  }

  render(){
    let { currentUser } = this.props;
    let boards = values(currentUser.boards);
    let pins = values(currentUser.pins);

    console.log(boards);
    const masonryOptions = {
          gutter: 20,
          fitWidth: true,
          transitionDuration: 0,
        };

    const masonryOptionsThumnail = {
          originTop: true,
          horizontalOrder: true,
          fitWidth: true,
          transitionDuration: 0,
        };

    const allTheBoards = boards.map((board,idx) => (
          // <BoardItem board={board} key={board.id} />
            <div className="modal-board-thumbnail-container" key={idx}>
              <div className="modal-board-thumbnail-container-title">{board.board_name}</div>
              <Masonry className={'board-index-masonry'}
                       elementType={'ul'}
                       options={masonryOptionsThumnail}
                       disableImagesLoaded={false}
                       updateOnEachImageLoad={false}>
                       { values(board.pins).slice(0,6).map( (pin,idx) => {
                        return (
                          <div key={idx} className='board-index-pin-thumbnails'>
                            <img className='board-index-pin-img'src={pin.image_url}></img>
                          </div>
                        )
                      })
                    }
              </Masonry>
          </div>
    ));

    return(
      <div className="board-index-all">
        <Masonry className={'board-index-masonry'}
                 elementType={'ul'}
                 options={masonryOptions}
                 disableImagesLoaded={false}
                 updateOnEachImageLoad={false}>
            { this.handleCreateBoard() }
            { allTheBoards }
        </Masonry>
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardIndex;
// <Masonry className={'board-index-masonry'}
//          elementType={'ul'}
//          options={masonryOptions}
//          disableImagesLoaded={false}
//          updateOnEachImageLoad={false}>
//   <div className="modal-board-thumbnail-container">
//     <ModalBoardForm currentUserImage={this.props.currentUser.image_url}/>
//   </div>
//   <div className="board-index-masonry-ul">
//     { allTheBoards }
//   </div>
// </Masonry>
