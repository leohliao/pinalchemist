import React from 'react';
import { withRouter } from 'react-router-dom';

class PinIndexForm extends React.Component {
  constructor(props){
    super(props);


  }//end constructor



  render(){
    const { pins } = this.props;
    return(
      <div>
        <h1>this is PinIndex</h1>
        <ul>

        </ul>
      </div>
    );//rend return
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
