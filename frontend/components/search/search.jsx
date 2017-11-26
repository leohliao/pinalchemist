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
    // this.handleSearch = this.handleSearch.bind(this);
  } // end constructor

  handleInput(e){
    e.preventDefault();
    setTimeout(this.setState({ searchQuery: e.target.value},
      () => this.props.requestSearch(this.state.searchQuery)), 50)
  }  // end handleInput

  handleReset(e){
    e.preventDefault();
    this.setState({searchQuery: "" });
  } // end handleReset

  // componentWillMount(){
  //   this.props.resetSearch();
  // } // componentWillMount

  searchResults(items, type){
    let {resetSearch} = this.props;
    const resultsList = items.map((item, idx) => {
        switch (type){
          case "Pins":
            return (
              <li key={idx} onClick={this.handleReset}>
                <PinShowContainer key={item.id} pin={item} />
              </li>
            );
          case "Boards":
            return (
              <li key={idx} onClick={this.handleReset}>
                <Link to={`/boards/${item.id}`}>
                  <span id="list-item">{item.board_name}</span>
                </Link>
            </li>
            );
          case "Users":
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
      <div className="search-results-container-return">
        <h3>{type}</h3>
        <ul className="search-results-container-return-ul">{resultsList}</ul>
     </div>
    ) // return
  } // searchResults

  handleSearch(){
    let pinsList;
    let boardsList;
    let usersList;
    const { search } = this.props;
    const pins = search.pins || [];
    const boards = search.boards || [];
    const users = search.users || [];
    if (Object.keys(search).length > 0) {
      pinsList = pins.length > 0 ? this.searchResults(pins, "Pins") : null;
      boardsList = boards.length > 0 ? this.searchResults(boards, "Boards") : null;
      usersList = users.length > 0 ? this.searchResults(users, "Users") : null;
    } // end if
    // let dropDown;
    // document.addEventListener("click", (e)=> {
    //   dropDown = document.getElementsByClassName('search-results-container')[0];
    //   console.log("e " + e.target.className);
    //   console.log("dropDown " + dropDown.className);
    //   console.log("dropDown " + dropDown.style);
      // console.log(e.path);
      // if (e.target.id === 'list-item' || e.target.id === 'list-item-user') {
      //   dropDown.style.display = 'none';
      // } else if ( e.path.includes(dropDown) || e.target.id === 'search-bar') {
      //   dropDown.style.dispay = 'block';
      // } else {
      //   dropDown.style.display = 'none';
      // } // end if
    // }); // end document.addEventListener

    return (
      <div className='search-results-container'>
        {pinsList ? pinsList : null}
        {boardsList ? boardsList : null}
        {usersList ? usersList : null}
      </div>
    ) // end return
  } // handleSearch

  render(){
    return (
      <div>
        <input className="nav-bar-search-input"
               type="text"
               value={this.state.searchQuery}
               onChange={this.handleInput}
               placeholder="Search"/>
             {this.handleSearch()}
      </div>
    ) // return
  }// end render
} // end Search

export default Search;
