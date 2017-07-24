import React from 'react';
import { withRouter } from 'react-router-dom';
import PinIndexForm from '../pinIndex/pin_index_form';
import { selectAllPins } from '../../../reducers/selectors';
import { values } from 'lodash';

class PinCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pins: []
    };

    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.postImage = this.postImage.bind(this);
  }//end constructor

  componentDidMount(){
    $.get("/api/pins", images => (
      this.setState({ pins: images })
    ).bind(this));
  }//end componentDidMount

  postImage(image){
    const data = { pins: { image_url: image.url} };
    $.post("/api/pins", data, (savedImage) => {
      let pins = this.state.pins;
      pins.push(savedImage);
      this.setState({ pins: pins });
    });
  }//end postImage

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        this.props.createPin(results[0]);
      }
    });
  }//end upload

  update(property){
    return e => this.setState({ [property]: e.target.value });
  }//end update

  handleSubmit(e){
    e.preventDefault();
    this.state.upload(e);
    this.props.createPin(this.state)
      .then(data => this.props.history.push(`/posts/${data.id}`));
  }//end handleSubmit

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
        <form onSubmit={this.handleSubmit}>
          <label>Title
          <input onChange={this.update('title')}
                 placeholder="title"
                 value={this.state.title}/>
          </label>
          <label>Description
          <input type="textarea"
                 onChange={this.update('description')}
                 placeholder="description"
                 value={this.state.description}/>
          </label>
          <button className="create-button">Create</button>
        </form>
        <PinIndexForm pins={this.state.pins} />
      </div>
    );
  }//end render
}//end PinCreateForm

export default PinCreateForm;
