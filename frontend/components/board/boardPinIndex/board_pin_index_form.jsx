import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import ModalPinItem from '../../modal/modal_pin_item';
import { RingLoader } from 'react-spinners';
import { values } from 'lodash';

class BoardPinIndexForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }//end constructor

  componentDidMount(){
    this.setState({ loading: false });
  }//end componentDidMount

  render(){
    let pins = values(this.props.pins);
    const masonryOptions = {
          gutter: 20,
          fitWidth: true,
          // transitionDuration: 0,
          // percentPosition: true,
          // postion: 'center',
          // right: '10%',
          // backgroundColor: 'red',
        };

    const sortedPins = pins.sort(function(a,b){
      let dateA = new Date(a.created_at)
      let dateB = new Date(b.created_at)
      return dateB-dateA;
    });

    const allThePins = sortedPins.map( pin => (
      <li className="pin-index-pin-items" key={pin.id}>
        <ModalPinItem pin={pin} className="pin-index-pin-items-modal"/>
        <div className="pin-index-pin-items-modal-view">view</div>
        <div className="pin-index-pin-items-info">
          <div className="pin-index-pin-items-info-upper">
            <p>{pin.description ? pin.description : "..." }</p>
              <div className="pin-index-pin-items-info-author">
                <img src= {pin.author_image_url} />
              </div>
          </div>
        </div>
      </li>
    ));

    if (this.state.loading){
      return (
        <div className='sweet-loading'>
           <RingLoader
             color={'#57bc90'}
             loading={this.state.loading}
           />

        </div>
      )
    } else {
      return(
        <div>
            <Masonry className={'pins-index-form'}
                     elementType={'ul'}
                     options={masonryOptions}
                     disableImagesLoaded={false}
                     updateOnEachImageLoad={false}>
                     {allThePins}
            </Masonry>
        </div>
      );//end return
    } // end if
  }//end render
}//end PinIndexForm

export default withRouter(BoardPinIndexForm);
