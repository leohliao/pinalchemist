import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import ModalPinItem from '../../modal/modal_pin_item';
import { RingLoader } from 'react-spinners';

class PinIndexForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      end: 8
    }
    this.handleScroll = this.handleScroll.bind(this);
  }//end constructor

  componentDidMount(){
    window.bottom = false;
    window.addEventListener("scroll", this.handleScroll);
    this.props.requestAllPins()
    .then(setTimeout(() => this.setState({ loading: false }), 1000))
  }//end componentDidMount

  componentWillUnmount() {
   window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    $(window).scroll( function() {
       if ($(window).scrollTop() <= $(document).height() - $(window).height()
          && $(window).scrollTop() >= $(document).height() - $(window).height() - 50) {
         window.bottom = true;
       }
     });

    if (window.bottom) {
      if (this.state.end < this.props.pins.length) {
        this.setState({
          end: this.state.end + 8
        });
      }
      window.bottom = false;
    }
  }//end handleScroll

  render(){
    const { pins } = this.props;
    const masonryOptions = {
          gutter: 20,
          fitWidth: true,
          transitionDuration: 0.2,
        };

    const sortedPins = pins.sort(function(a,b){
      let dateA = new Date(a.created_at)
      let dateB = new Date(b.created_at)
      return dateB-dateA;
    });

    const allThePins = sortedPins.slice(0, this.state.end).map( pin => (
      <li className="pin-index-pin-items" key={pin.id}>
        <ModalPinItem pin={pin} className="pin-index-pin-items-modal"/>
        <div className="pin-index-pin-items-modal-view">view</div>
        <div className="pin-index-pin-items-info">
          <div className="pin-index-pin-items-info-upper">
            <p>{pin.description ? pin.description : "(No description)" }</p>
              <div className="pin-index-pin-items-info-author">
                <img src= {pin.author_image_url} />
              </div>
          </div>
        </div>
      </li>
    ));

    if (this.state.loading){
      return (
        <div className='sweet-loading'>
           <RingLoader
             color={'#57bc90'}
             loading={this.state.loading}
           />
        </div>
      )
    } else {
      return(
        <div>
            <Masonry className={'pins-index-form'}
                     elementType={'ul'}
                     options={masonryOptions}
                     disableImagesLoaded={false}
                     updateOnEachImageLoad={false}>
              { allThePins }
            </Masonry>
        </div>
      );//end return
    } // end if
  }//end render
}//end PinIndexForm

export default withRouter(PinIndexForm);
