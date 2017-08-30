# PinAlchemist

[PinAlchemist Live] is a full-stack web application inspired by [Pinterest].
It is designed for inventors to share idea images and inspiration on the network,
and thus helping more people to come up with new ideas and inventions.  
This web app is solely build using Ruby on Rails, and React/Redux using POSTGRESQL database.

## Features
  - [ ] User Authentication: authentication is implemented both in the frontend and backend.
    ![auth_01](https://user-images.githubusercontent.com/25352090/28740694-06f4442e-73bd-11e7-8e37-5dc28cedd5a1.png)
    * [ ] Users will not be able to enter the site unless they log in or sign up as new user.
    * [ ]Users will not be able to see the DELETE PIN icons unless if they are the author of the pin. (For convenient purpose of the inspector, I included a guest login, see DEMO button)
  - [ ] User can see all the pins available on the site, they can also create news pins (upload images), delete pins(only if they are authorized).
    ![auth_03](https://user-images.githubusercontent.com/25352090/28740704-18496f60-73bd-11e7-9439-2f9f9df5c54a.png)
  - Major UI Components:
    * [ ] Interactive grids system: the arrangement of the pins will be varied according users' browser screen size when they enter the site. Masonry is implemented for the smooth transitioning of the images.
      ![ui_01](https://user-images.githubusercontent.com/25352090/28740700-0fbb4576-73bd-11e7-82b7-226f7410448e.png)
    * [ ] Pop up window: Creating a new pin, showing a single pin will be result in popping out a separate window for better viewing purposes. There is a close button on the window, but user can user also click area outside of the pop up window to close it.
      ![modal_03](https://user-images.githubusercontent.com/25352090/28740697-0da37c0e-73bd-11e7-9e88-21926271b86a.png)


## Implementation Style

    I like to keep my codes minimum and separated. Therefore I usually create separate classes of object that would serves as templates and can be used over and over. In the following example, I used the same form (ModalPinItem and ModalBoardForm) that I have used in other parts of the code. I also like to group my codes separated by their category. So I usually define my functions outside of the html part of the file.

    ```jsx
    let filteredPins;
    if(this.props){
      const filteringPins = pins.filter((pin) => this.props.boardPins.includes(pin.id));
      if (filteringPins) {
        filteredPins = filteringPins;
      }
    }
    // <img src={pin.image_url} alt={pin.title} />
    const havePins = filteredPins.reverse().map( pin => (
      <div className="board-index-masonry-ul-li" key={pin.id} >
        <div className="modal-board-form-container" >
            <div className="modal-board-thumbnail-container-show">
              <div>
                <ModalPinItem pin={pin}/>
              </div>
            </div>

        </div>
      </div>
    ));

    return(
      <div className="board-show-all">
          <Masonry className={'board-index-masonry'}
                   elementType={'ul'}
                   options={masonryOptions}
                   disableImagesLoaded={false}
                   updateOnEachImageLoad={false}>
            <div className="modal-board-form-container">
              <ModalBoardForm />
            </div>
              { havePins }
          </Masonry>
      </div>
      ```

    The tricky part of PinAlchemist is the data associations, in the effort of minimizing the chances of having to modify the table, I changed my backend code so that it filters out prior on sending data to the frontend.

    ```ruby
    def index
      @boards = Board.includes(:pins).where(user_id: params[:user_id])
      render 'api/boards/index'
    end

    def show
      # keeps us from using n+1
      @board = Board.includes(:pins).find(params[:id])
      render 'api/boards/show'
    end
    ```

## PinAlchemist Project Design
* [View Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]


## Future Directions
  PinAlchemist was designed and launched in a relatively short amount of time. But I plan to continued to implement the following features to this wonderful web app as time permits:
    * Implement and improve additional UI elements - showing thumbnail views in each boards.
    * Implement and improve additional UI elements - add Infinite scroll.
    * Have users be able to search pins.
    * Have users be able to save pins into the boards.
    * Have users be able to see other user's boards.
    * Have users be able to follow other users, as well as be followed.

[PinAlchemist Live]: https://pinalchemist.herokuapp.com/#/login
[Pinterest]: https://www.pinterest.com/
[wireframes]: (docs/wireframes)
[components]: (docs/component-hierarchy.md)
[sample-state]: (docs/sample-state.md)
[api-endpoints]: (docs/api-endpoints.md)
[schema]: (docs/schema.md)
