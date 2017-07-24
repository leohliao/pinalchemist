import React from 'react';
import { withRouter } from 'react-router-dom';
import PinIndexItem from '../pinIndex/pin_index_item';
import { selectAllPins } from '../../../reducers/selectors';
import { values } from 'lodash';

class PinCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: "",
      image_url: ""
    };

    this.upload = this.upload.bind(this);
  }//end constructor

  // getInititalState(){
  //   return ({
  //     pins: {}
  //   });
  // }//end getInititalState

  componentDidMount(){
    $.get("/api/pins", pins => (
      this.setState({ pins })
    ));
  }//end componentDidMount

  // postImage(uploadImage){
  //   const data = {pin: { image_url: uploadImage.url}};
  //   $.post("/api/pins", data, (savedImage) => {
  //     let pins = this.props.pins;
  //     pins.push(savedImage);
  //     this.setState({ pins: pins });
  //   });
  // }//end postImage

  upload(event){
    event.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options,(error, results) => {
      if(!error){
        this.props.createPin(results[0]);
      }
    });
  }//end upload

  render(){
    const { pins } = this.state;

    let allPins;
    let havePins = this.state.pins;
    if (havePins){
      allPins = havePins;
    } else {
      return null;
    }

    console.log(allPins);
    return(
      <div>
        <button onClick={this.upload}>Upload new image!</button>

      </div>
    );
  }//end render
}//end PinCreateForm

export default PinCreateForm;
