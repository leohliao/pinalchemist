import React from 'react';
// import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
// import { Link } from 'react-router-dom';
// import BoardItem from './board_item';
// import ModalBoardForm from '../boardForm/board_form_container';
import ModalPinItem from '../../modal/modal_pin_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteBoard = this.deleteBoard.bind(this);
  }//end constructor

  componentDidMount(){
    this.props.requestSingleBoard(this.props.match.params.id);
  }//end componentDidMount

  deleteBoard(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
    this.props.removeBoard(this.props.board.id);
  }//deleteBoard

  render(){
    const { currentUser, boards, pins } = this.props;

    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
          transitionDuration: 1.5,
          postion: 'center',
          // percentPosition: true,
        };

    let filteredPins;
    if(this.props){
      console.log(this.props);
      // const filteringPins = pins.filter((pin) => this.props.pins.pinned_boards.includes(board.id));
      const filteringPins = this.props.pins
      if (filteringPins) {
        filteredPins = filteringPins;
      }
    }
    // <img src={pin.image_url} alt={pin.title} />
    const havePins = filteredPins.reverse().map( pin => (
      <div className="board-index-masonry-ul-li" key={pin.id} >
        <div className="modal-board-form-container" >

            <div className="modal-board-thumbnail-container-show">
              <div>
                <ModalPinItem pin={pin}/>
              </div>
            </div>

        </div>
      </div>
    ));

    return(
      <div className="board-show-all">
        <h1>{this.props.board.board_name}</h1>
          <Masonry className={'board-index-masonry'}
                   elementType={'ul'}
                   options={masonryOptions}
                   disableImagesLoaded={false}
                   updateOnEachImageLoad={false}>
              { havePins }
          </Masonry>
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardShow;
