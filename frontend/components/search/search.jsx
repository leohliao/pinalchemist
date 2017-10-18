import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';
import PinShowContainer from '../modal/modal_pin_item';


class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.searchResults = this.searchResults.bind(this);
  } // end constructor

  handleInput(e){
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ search: e.target.value},
      () => this.props.requestSearch(this.state.search)
    );
  }  // end handleInput

  handleReset(e){
    e.preventDefault();
    this.setState({search: ""});
  } // end handleReset

  componentWillMount(){
    this.props.resetSearch();
  } // componentWillMount

  searchResults(items, type){
    let {resetSearch} = this.props;
    const resultsList = items.map((item, idx) => {
          if (type === "Pins") {
            return (
              <li>
                <PinShowContainer key={item.id} pin={item} />
              </li>
            )
          } // end if
    }) // resultsList
  } // searchResults

  searchResultsAnalyze(){
    const search = this.props.search;
    const pin = search.pins || [];
    const boards = search.boards || [];
    const users = search.users || [];
    let pinsList;
    let boardsList;
    let usersList;
    if (Object.keys(search).length > 0) {
      pinsList = pins.length > 0 ? this.searchResults(pins, "Pins") : null;
      boardsList = boards.length > 0 ? this.searchResults(boards, "Boards") : null;
      usersList = users.length > 0 ? this.searchResults(users, "Users") : null;
    } // end if
  } // searchResultsAnalyze

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
