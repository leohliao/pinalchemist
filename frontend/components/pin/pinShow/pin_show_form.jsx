import React from 'react';

class PinShowForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pin: this.props.pin,
      pinID: this.props.pinID
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }//end constructor

  componentDidMount(){
    this.props.requestSinglePin(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.match.params.id !== nextProps.match.params.id){
      this.props.requestSinglePin(nextProps.match.params.id);
    }
  }//end componentWillReceiveProps

  handleSubmit(e){
    e.preventDefault();
    this.props.modalSwitch();
  }//end handleSubmit

  render(){
    const { pin } = this.props;
    return (
      <div>
          <h2>{pin.title}</h2>
          <img src={pin.image_url}
               className='pin-show-form-img'
               alt={pin.title}
               onClick={this.handleSubmit}/>
             <p>{pin.description}</p>
      </div>
    );//end return
  }//end render
}//end PinShowForm

export default PinShowForm;
