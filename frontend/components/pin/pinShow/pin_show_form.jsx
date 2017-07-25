import React from 'react';

class PinShowForm extends React.Component {
  constructor(props){
    super(props);
  }//end constructor

  componentDidMount(){
    this.props.requestSinglePin(this.pin.pinID);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.pinID !== nextProps.pinID){
      this.props.requestSinglePin(nextProps.pinID);
    }
  }//end componentWillReceiveProps

  render(){
    return (
      <div>
        <img src={this.props.pin.image_url} />
      </div>
    );//end return
  }//end render
}//end PinShowForm

export default PinShowForm;
