import React from 'react';
import { withRouter } from 'react-router-dom';

class PinCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.upload = this.upload.bind(this);
  }//end constructor

  upload(event){
    event.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options,(error, results) => {
      if(!error){
        this.props.postImage(results[0]);
      }
    });
  }

  render(){
    return(
      <div>
        <h1> I am Pin Container</h1>
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }//end render
}//end PinCreateForm

export default PinCreateForm;
