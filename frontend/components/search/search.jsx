import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';
import PinShowContainer from '../modal/modal_pin_item';


class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = { searchQuery: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // this.searchResults = this.searchResults.bind(this);
  } // end constructor

  handleInput(e){
    console.log(e.target.value);
    e.preventDefault();
    setTimeout(this.setState({ searchQuery: e.target.value},
      () => this.props.requestSearch(this.state.searchQuery)), 50
    );
  }  // end handleInput

  handleReset(e){
    e.preventDefault();
    this.setState({searchQuery: ""});
  } // end handleReset

  // componentWillMount(){
  //   this.props.resetSearch();
  // } // componentWillMount

  searchResults(items, type){
    let {resetSearch} = this.props;
    console.log(item, type);
    const resultsList = items.map((item, idx) => {
          if (type === "Pins") {
            return (
              <li>
                <PinShowContainer key={item.id} pin={item} />
              </li>
            );
          } else if ( type === "Boards") {
            return (
              <li key={idx} onClick={this.handleReset}>
                <Link to={`/boards/${item.id}`}>
                  <span id="list-item">{item.title}</span>
                </Link>
            </li>
            );
          } else if (type === "Users" ) {
            return (
              <li key={idx} onClick={this.handleReset}>
                <Link to={`/users/${item.id}`}>
                  <img id="list-item-user"src={item.image_url}/>
                <span id="list-item">{item.username}</span>
                </Link>
              </li>
            );
          }
    }); // resultsList

    return (
      <div className={type === 'Users' ? "user-search-items-container" : "search-items-container"}>
        <h3 className='search-type'>{type}</h3>
        <ul className='section-items-container'>{listItems}</ul>
        <br/>
     </div>
    ) // return
  } // searchResults

  searchResultsAnalyze(){
    const search = this.props.search;
    const pins = search.pins || [];
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
    let dropDown;
    document.addEventListener("click", (e)=> {
      dropdown = document.getElementsByClasName('search-results-container')[0];
      if (e.target.id === 'list-item' || e.target.id === 'list-item-user' || e.target.id === 'search-index-thumbnail') {
        dropdown.style.display = 'none';
      } else if ( e.path.includes(dropdown) || e.target.id === 'search-bar') {
        dropdown.style.dispay = 'block';
      } else {
        dropdown.style.display = 'none';
      } // end if
    }); // end document.addEventListener

    return (
      <div className='search-results-container'>
        {pinsList ? pinsList : null}
        {boardsList ? boardsList : null}
        {usersList ? usersList : null}
      </div>
    ) // end return
  } // searchResultsAnalyze

  render(){

    return (
      <div>
        <input className="nav-bar-search-input"
               type="text"
               value={this.state.searchQuery}
               onChange={this.handleInput}
               placeholder="Search"/>
             {this.searchResultsAnalyze()}
      </div>
    ) // return
  }// end render
} // end Search

export default Search;
