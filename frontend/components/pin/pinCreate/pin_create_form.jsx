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
      description: ""
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
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }//end handleImageUploadRequest

  //click to handle all forms information
  handleSubmit(e){
    e.preventDefault();
    const pin = this.state;
    this.props.createPin(pin);
    this.props.modalSwitch();
  }

  render(){
    const dropZoneInnerText = this.state.image_url === "" ? (
      <div className="pin-create-form-dropzone-innertext">
        <h2>Drag and Drop or Click Here!</h2>
      </div>
    ) : (
      <img src={this.state.image_url} />
    );

    return(
      <div>
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
              <label>Title
                <input type="text"
                       onChange={this.update('title')}
                       value={this.state.title}/>
              </label>
              <label>Description
                <input type="textarea"
                       onChange={this.update('description')}
                       value={this.state.description}/>
              </label>
              <input className="pin-create-form-dropzone-submit"
                     type="submit"
                     value="Create"
                     />
        </form>

      </div>
    );//end return
  }//end render
}//end PinCreateForm

export default PinCreateForm;


// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import PinIndexForm from '../pinIndex/pin_index_form';
// import { selectAllPins } from '../../../reducers/selectors';
// import { values } from 'lodash';
//
// class PinCreateForm extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       pins: []
//     };
//
//     this.upload = this.upload.bind(this);
//     this.update = this.update.bind(this);
//     this.postImage = this.postImage.bind(this);
//   }//end constructor
//
//   componentDidMount(){
//     $.get("/api/pins", images => (
//       this.setState({ pins: images })
//     ).bind(this));
//   }//end componentDidMount
//
//   postImage(image){
//     const data = { pins: { image_url: image.url} };
//     $.post("/api/pins", data, (savedImage) => {
//       let pins = this.state.pins;
//       pins.push(savedImage);
//       this.setState({ pins: pins });
//     });
//   }//end postImage
//
//   upload(e){
//     e.preventDefault();
//     cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
//       if(!error){
//         this.props.createPin(results[0]);
//       }
//     });
//   }//end upload
//
//   update(property){
//     return e => this.setState({ [property]: e.target.value });
//   }//end update
//
//   handleSubmit(e){
//     e.preventDefault();
//     this.state.upload(e);
//     this.props.createPin(this.state)
//       .then(data => this.props.history.push(`/posts/${data.id}`));
//   }//end handleSubmit
//
//   render(){
//     const { pins } = this.state;
//
//     let allPins;
//     let havePins = this.state.pins;
//     if (havePins){
//       allPins = havePins;
//     } else {
//       return null;
//     }
//
//
//     console.log(allPins);
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Title
//           <input onChange={this.update('title')}
//                  placeholder="title"
//                  value={this.state.title}/>
//           </label>
//           <label>Description
//           <input type="textarea"
//                  onChange={this.update('description')}
//                  placeholder="description"
//                  value={this.state.description}/>
//           </label>
//           <button className="create-button">Create</button>
//         </form>
//         <PinIndexForm pins={this.state.pins} />
//       </div>
//     );
//   }//end render
// }//end PinCreateForm
//
// export default PinCreateForm;
