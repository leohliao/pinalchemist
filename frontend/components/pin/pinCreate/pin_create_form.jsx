import React from 'react';
import Dropzone from 'react-dropzone';
import superAgent from 'superagent';

class PinCreateForm extends React.Component {
  constructor(props){
    super(props);
    //define State
    this.state = {
      title: "",
      image_url: "",
      thumbnail_url: "",
      description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }//end constructor

  //change the value of the input field
  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }//end update

  //calls handleImageUploadRequest
  handleImageUpload(image){
    this.handleImageUploadRequest(image[0]);
  }//end handleImageDrop

  //actual upload request to cloudinary
  handleImageUploadRequest(image){
    const upload = superAgent.post(window.UPLOAD_URL)
                   .field('upload_preset', window.UPLOAD_PRESET)
                   .field('file', image);

    upload.end((err, response) => {
      if(response.body.secure_url !== ""){
        console.log(response.body);
        this.setState({
          image_url: response.body.secure_url,
        });
      }
    });
  }//end handleImageUploadRequest

  //click to handle all forms information
  handleSubmit(e){
    e.preventDefault();
    const pin = this.state;
    if (pin.image_url !=="" && pin.title !== ""){
      this.props.createPin(pin);
      this.props.modalSwitch();
    } else {
      alert("You are missing title or actual image!");
    }
  }

  render(){
    const dropZoneInnerText = this.state.image_url === "" ? (
      <div className="pin-create-form-dropzone-innertext">
        <h2>Drag and Drop or Click Here!</h2>
      </div>
    ) : (
      <div className="pin-create-form-dropzone-div">
        <img className="pin-create-form-dropzone-image"
           src={this.state.image_url} />
      </div>
    );

    return(
      <div className="pin-create-form-all">
        <h1>Create Pin</h1>
        <Dropzone
            className="pin-create-form-dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.handleImageUpload}>
              { dropZoneInnerText }
        </Dropzone>

        <form className="pin-create-form-dropzone-form"
              onSubmit={this.handleSubmit}>
              <label className="pin-create-form-label" >
                <h3>Title</h3><br />
                <input type="text"
                       onChange={this.update('title')}
                       value={this.state.title}/>
              </label>
              <label className="pin-create-form-label">
                <h3>Description</h3><br />
                <input type="textarea"
                       onChange={this.update('description')}
                       value={this.state.description}/>
              </label>
              <input className="pin-create-form-dropzone-submit"
                     type="submit"
                     value="Create"/>
        </form>

      </div>
    );//end return
  }//end render
}//end PinCreateForm

export default PinCreateForm;
