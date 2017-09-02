import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import ModalPinItem from '../../modal/modal_pin_item';
import { RingLoader } from 'react-spinners';


class PinIndexForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }//end constructor

  componentDidMount(){
    this.props.requestAllPins()
    .then(setTimeout(() => this.setState({ loading: false }), 1000))
  }//end componentDidMount

  render(){
    const { pins } = this.props;
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
        <div className="pin-index-pin-items-info">
          <div className="pin-index-pin-items-info-image">
            <img src= {pin.author_image_url} />
          </div>
          <div className="pin-index-pin-items-info-text">
            <h1>{pin.author}</h1>
            <p>{pin.author.description}</p>
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
              { allThePins }
            </Masonry>
        </div>
      );//end return
    } // end if
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
// <NavBarForm />
// <br />
