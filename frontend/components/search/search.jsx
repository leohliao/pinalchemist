import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';


class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.searchResults = this.searchResults.bind(this);
  } // end constructor

  handleInput(e){
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ search: e.target.value} )
    //   () => this.props.requestSearch(this.state.search)
    // )
  }  // end handleInput
  //
  // handleReset(event){
  //   event.preventDefault();
  //   this.setState({search: ""});
  // } // end handleReset
  //
  // componentWillMount(){
  //   this.props.resetSearch();
  // } // componentWillMount
  //
  // searchResults(items, type){
  //
  // } // searchResults

  render(){

    return (
      <div>
        <input className="nav-bar-search-input"
               type="text"
               autoComplete="on"
               value={this.state.search}
               onChange={this.handleInput}
               placeholder="Search"/>
      </div>
    ) // return
  }// end render
} // end Search

export default Search;
