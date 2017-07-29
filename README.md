# PinAlchemist

[PinAlchemist Live] is a full-stack web application inspired by [Pinterest].
It is designed for inventors to share idea images and inspiration on the network,
and thus helping more people to come up with new ideas and inventions.  
This web app is solely build using Ruby on Rails, and React/Redux using POSTGRESQL database.

## Features
  - User Authentication: authentication is implemented both in the frontend and backend.

    ![auth_01](https://user-images.githubusercontent.com/25352090/28740694-06f4442e-73bd-11e7-8e37-5dc28cedd5a1.png)

      * Users will not be able to enter the site unless they log in or sign up as new user.
      * Users will not be able to see the DELETE PIN icons unless if they are the author of the pin. (For convenient purpose of the inspector, I included a guest login, see DEMO button)
      * User can see all the pins available on the site, they can also create news pins (upload images), delete pins(only if they are authorized).

    ![auth_03](https://user-images.githubusercontent.com/25352090/28740704-18496f60-73bd-11e7-9439-2f9f9df5c54a.png)


  - Major UI Components:
    * Interactive grids system: the arrangement of the pins will be varied according users' browser screen size when they enter the site. Masonry is implemented for the smooth transitioning of the images.

      ![ui_01](https://user-images.githubusercontent.com/25352090/28740700-0fbb4576-73bd-11e7-82b7-226f7410448e.png)


    * Pop up window: Creating a new pin, showing a single pin will be result in popping out a separate window for better viewing purposes. There is a close button on the window, but user can user also click area outside of the pop up window to close it.

      ![modal_03](https://user-images.githubusercontent.com/25352090/28740697-0da37c0e-73bd-11e7-9e88-21926271b86a.png)


## Implementation Style
  - Coding Style: In order to keep the codes neat and dry. I usually create separate classes of object and implement them repeatedly as much as possible. In the following example, I created a component for Masonry,
  and then implement separate jsx components into the Masonry to get the effect I wanted.

  ```html
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

  The benefits of using different components together can create tremendous UI effects on the app. In the above example, I have implemented Modal component into Masonry component. By doing this, not only my app will be shown and displayed in astonishing view, but it will also have the ability to open each element in a separate browser (the functionality that Modal has). Here is another example of how I usually implement my functions to keep code dry:

  ```html
  <div className="session-credential-form">
      <label>
        <input type="text"
               value={this.state.username}
               placeholder={ usernamePlaceholder }
               onChange={this.update(`username`)}
               className="session-input"/>
      </label>

      <label>
        <input type="password"
               value={this.state.password}
               placeholder={ passwordPlaceholder }
               onChange={this.update(`password`)}
               className="session-input"/>
      </label>

      <button type="submit"
              className="session-form-submit-button"><span>{submitText}</span></button>

      <h3 className="session-form-message">Please { messageConvert } or { navConvert }</h3>
      <div>{this.navLink()}</div>

  </div>
  ```
  
In the above example, I implemented an "update" function that will set my state's contents according to the component I provided. I also use a lot of ternary logic to show different text accord to the state's properties.
