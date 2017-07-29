import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import BoardItem from './board_item';
import { Link } from 'react-router-dom';
import ModalBoardForm from '../boardForm/board_form_container';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

  }//end constructor

  componentDidMount(){
    this.props.requestUserBoards(this.props.currentUserId);
  }//end componentDidMount

  render(){
    const { boards } = this.props;

    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
          transitionDuration: 1.5,
          postion: 'center',
          // percentPosition: true,
        };

    const allTheBoards = boards.reverse().map( board => (
        <div className="board-index-masonry-ul-li" key={board.id} >
          <BoardItem board={board} />
        </div>

    ));

    return(
      <div className="board-index-all">
        <Masonry className={'board-index-masonry'}
                 elementType={'ul'}
                 options={masonryOptions}
                 disableImagesLoaded={false}
                 updateOnEachImageLoad={false}>

          <div className="modal-board-form-container">
            <ModalBoardForm />
          </div>
          { allTheBoards }
        </Masonry>
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardIndex;