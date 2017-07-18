## Component Hierarchy

**AuthContainer**
  - SignupForm
  - LoginForm

**MainContainer**

  - **NavBar**
    + HomePage (Logo)
    + Search Bar
    + Explore
    + MyLibrary
    + LogOut

  - **SearchContainer** 
    + Search

  - **NewPin**
    + NewPin

  - **NewBoard**
    + NewBoard

  - **UserContainer**
    + UserDetail

    - **FollowsContainer**
      + Followers
      + Following

    - **BoardsContainer**
      + BoardIndex
      + BoardDetail
      + EditBoard
      + Remove Board

    - **PinsContainer**
      + PinIndex
      + PinDetail


## Routes

| Path                       | Component           |
|----------------------------|---------------------|
| "/signup"                  | "AuthContainer" |
| "/login"                   | "AuthContainer" |
| "/"                        | "MainContainer"     |
| "/:username"               | "UserContainer"     |
| "/:username/followers"     | "FollowsContainer"  |
| "/:username/following"     | "FollowsContainer"  |
| "/:username/pins"          | "PinsContainer"     |
| "/:username/boards"        | "BoardsContainer"   |