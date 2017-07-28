import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';
// import BoardItem from './board_item';
import ModalBoardForm from '../boardForm/board_form_container';
import { selectAllPins } from '../../../reducers/selectors';
import ModalPinItem from '../../modal/modal_pin_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteBoard = this.deleteBoard.bind(this);
  }//end constructor

  componentDidMount(){
    console.log(this.props.match.params.id);
    this.props.requestSingleBoard(this.props.match.params.id);
    this.props.requestAllPins();
  }//end componentDidMount

  // componentWillReceiveProps(nextProps){
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //    this.props.requestSingleBoard(nextProps.match.params.id);
  //  }
  // }//componentWillReceiveProps

  deleteBoard(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
    this.props.removeBoard(this.props.board.id)
  }//deleteBoard

  render(){
    const { currentUser, boards, pins, boardPins } = this.props;

    const masonryOptions = {
          gutter: 25,
          fitWidth: true,
          transitionDuration: 1.5,
          postion: 'center',
          // percentPosition: true,
        };

    let filteredPins;
    if(this.props){
      const filteringPins = pins.filter((pin) => this.props.boardPins.includes(pin.id));
      if (filteringPins) {
        filteredPins = filteringPins;
      }
    }

    const havePins = filteredPins.reverse().map( pin => (
      <div className="board-index-masonry-ul-li" key={pin.id} >
        <div className="modal-board-form-container" >
          <div>
            <div className="modal-board-thumbnail-container">
              <div>
                  <img src={pin.image_url} alt={pin.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return(
      <div className="board-show-all">
          <Masonry className={'board-index-masonry'}
                   elementType={'ul'}
                   options={masonryOptions}
                   disableImagesLoaded={false}
                   updateOnEachImageLoad={false}>
            <div className="modal-board-form-container">
              <ModalBoardForm />
            </div>
              { havePins }
          </Masonry>
      </div>
    );//end return
  }//end render
}//end BoardIndex

export default BoardShow;
