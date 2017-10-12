import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';


class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = { search: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  } // end constructor

  handleReset(event){
    event.preventDefault();
    this.setState({search: ""});
  } // end handleReset

  handleInput(event){
    event.preventDefault();
    this.setState({search: event.target.value},
    () => this.props.requestSearch(this.state.search)
    )
  }  // end handleInput

  componentWillMount(){
    this.props.resetSearch();
  } // componentWillMount


  render(){
    return (
      <div>
        <input className="nav-bar-search-input"
               type="text"
               autoComplete="off"
               name="search"
               placeholder="Search"/>
      </div>
    ) // return
  }// end render
} // end Search

export default Search;
