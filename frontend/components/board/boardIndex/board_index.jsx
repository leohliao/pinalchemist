import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import BoardItem from './board_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }//end constructor

  componentDidMount(){
    this.props.requestAllBoards();
  }//end componentDidMount

  render(){
    const { boards, currentUser } = this.props;

    const masonryOptions = {
          gutter: 20,
          fitWidth: true,
          // transitionDuration: 0,
          // percentPosition: true,
          // postion: 'center',
          // right: '10%',
          // backgroundColor: 'red',
        };

    const allTheBoards = boards.reverse().map( board => (
      <ul className="board-index-masonry-element" key={board.id}>
        <BoardItem board={board} />
      </ul>
    ));

    return(
      <div>
        <Masonry className={'board-index-masonry'}
                 elementType={'ul'}
                 options={masonryOptions}
                 disableImagesLoaded={false}
                 updateOnEachImageLoad={false}>
          { allTheBoards }
        </Masonry>
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardIndex;
