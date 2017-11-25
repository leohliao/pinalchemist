import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';
import PinShowContainer from '../modal/modal_pin_item';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchQuery: "" };
    this.handleInput = this.handleInput.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  } // end constructor

  handleInput(e){
    e.preventDefault();
    this.setState({ searchQuery: e.target.value},
      () => this.props.requestSearch(this.state.searchQuery))
  }  // end handleInput

  handleReset(e){
    e.preventDefault();
    this.setState({searchQuery: ""});
  } // end handleReset

  // componentWillMount(){
  //   this.props.resetSearch();
  // } // componentWillMount

  searchResults(items, type){
    // let {resetSearch} = this.props;
    // const resultsList = items.map((item, idx) => {
    //       if (type === "Pins") {
    //         return (
    //           <li>
    //             <PinShowContainer key={item.id} pin={item} />
    //           </li>
    //         );
          // } else if ( type === "Boards") {
          //   return (
          //     <li key={idx} onClick={this.handleReset}>
          //       <Link to={`/boards/${item.id}`}>
          //         <span id="list-item">{item.title}</span>
          //       </Link>
          //   </li>
          //   );
          // } else if (type === "Users" ) {
          //   return (
          //     <li key={idx} onClick={this.handleReset}>
          //       <Link to={`/users/${item.id}`}>
          //         <img id="list-item-user"src={item.image_url}/>
          //       <span id="list-item">{item.username}</span>
          //       </Link>
          //     </li>
          //   );
          // }
    // }); // resultsList

    // return (
    //   <div className={type === 'Users' ? "user-search-items-container" : "search-items-container"}>
    //     <h3 className='search-type'>{type}</h3>
    //     <ul className='section-items-container'>{listItems}</ul>
    //     <br/>
    //  </div>
    // ) // return
  } // searchResults

  handleSearch(){
    const { search } = this.props;
    const pins = search.pins || [];
    const boards = search.boards || [];
    const users = search.users || [];
    let pinsList;
    let boardsList;
    let usersList;
    // if (Object.keys(search).length > 0) {
    //   pinsList = pins.length > 0 ? this.searchResults(pins, "Pins") : null;
    //   boardsList = boards.length > 0 ? this.searchResults(boards, "Boards") : null;
    //   usersList = users.length > 0 ? this.searchResults(users, "Users") : null;
    // } // end if
    // let dropDown;
    // document.addEventListener("click", (e)=> {
    //   dropDown = document.getElementsByClassName('search-results-container')[0];
    //   if (e.target.id === 'list-item' || e.target.id === 'list-item-user' || e.target.id === 'search-index-thumbnail') {
    //     dropDown.style.display = 'none';
    //   } else if ( e.path.includes(dropDown) || e.target.id === 'search-bar') {
    //     dropDown.style.dispay = 'block';
    //   } else {
    //     dropDown.style.display = 'none';
    //   } // end if
    // }); // end document.addEventListener

    return (
      <div className='search-results-container'>
        <h1>Hello</h1>
        // {pinsList ? pinsList : null}
        // {boardsList ? boardsList : null}
        // {usersList ? usersList : null}
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
