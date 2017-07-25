import React from 'react';
import { withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';
import ModalPinItem from '../../modal/modal_pin_item';

//temp
import NavBarForm from '../../navbar/nav_bar_container';
import ModalPinCreate from '../../modal/modal_pin_create';

class PinIndexForm extends React.Component {
  constructor(props){
    super(props);

  }//end constructor

  componentDidMount(){
    this.props.requestAllPins();
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
    return(
      <div>
        <NavBarForm />
        <br />
        <ModalPinCreate />
        <br/>
          <Masonry className={'pins-index-form'}
                   elementType={'ul'}
                   options={masonryOptions}
                   disableImagesLoaded={false}
                   updateOnEachImageLoad={false}>
            { allThePins }
          </Masonry>
      </div>
    );//rend return
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
