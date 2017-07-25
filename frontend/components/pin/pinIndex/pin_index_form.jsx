import React from 'react';
import { withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import NavBarForm from '../../navbar/nav_bar_container';
import PinCreateForm from '../pinCreate/pin_create_container';
import ModalPinCreate from '../../modal/modal_pin_create';
import Masonry from 'react-masonry-component';

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
          transitionDuration: 0,
          gutter: 25,
          fitWidth: true
        };

    const allThePins = pins.reverse().map( pin => (
      <li className="image-element-class" key={pin.id}>
        <img src={pin.image_url} />
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

      // <PinIndexItem key={pin.id} pin={pin} />

      //     return (
      //       <Masonry className={"pins-index-container"}
      //         elementType={'ul'}
      //         options={masonryOptions}
      //         disableImagesLoaded={false}
      //         updateOnEachImageLoad={false}
      //         >
      //         {pins.map( (pin) => {
      //           return (
      //             <PinModal key={ pin.id }
      //               pin={ pin }>
      //             </PinModal>);
      //           }
      //         )}
      //       </Masonry>
      //     );
      //   }
      // }
      //
      // export default PinsIndex;
