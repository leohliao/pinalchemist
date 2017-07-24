import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <li key={idx}><img ng-src="{pin.image_url}" alt=""/>{pin.image_url}</li>
    ));
    return(
      <div>
        <h1>this is PinIndex</h1>
        <ul>
          { allThePins }
        </ul>
      </div>
    );//rend return
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
