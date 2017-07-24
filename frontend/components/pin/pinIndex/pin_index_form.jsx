import React from 'react';
import { withRouter } from 'react-router-dom';
import PinIndexItem from './pin_index_item';
import NavBarForm from '../../navbar/nav_bar_container';
import PinCreateForm from '../pinCreate/pin_create_container';
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
    console.log("pins are " + pins);
    const allThePins = pins.map((pin,idx) => (
      <PinIndexItem key={pin.id} pin={pin} />
    ));
    return(
      <div>
        <NavBarForm />
        <br />
        <PinCreateForm />
        <br />
        <ModalPinCreate />
        <ul>
          { allThePins }
        </ul>
      </div>
    );//rend return
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
