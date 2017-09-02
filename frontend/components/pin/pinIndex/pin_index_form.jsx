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
    .then(setTimeout(() => this.setState({ loading: false }), 2000))
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
    const allThePins = pins.reverse().map( pin => (
      <li className="image-element-class" key={pin.id}>
        <ModalPinItem pin={pin} />
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
