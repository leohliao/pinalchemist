# API Endpoints

## HTML API

### Root

- `GET /` - Initiate the web app

## JSON API

### Users

- `POST /api/users` - Create new user
- `PATCH /api/users` - Edit user information

### Session

- `POST /api/session` - Sign In
- `DELETE /api/session` - Sign Out

### Pins

- `GET /api/pins` - Open pins index // bnb
- `POST /api/pins` - Create new pins
- `PATCH /api/pins/:id` - Edit single pin
- `DELETE /api/pins/:id` - Delete single pin

### Boards

- `GET /api/boards` - Open Boards
- `POST /api/boards` - Create new boards
- `GET /api/boards/:id` - Open single board // return all the pins in the boards
- `DELETE /api/boards/:id` - Delete single board

### Follows

- `GET /api/followers` - Open followers
- `GET /api/following` - Get followings
- `POST /api/following` - Follows User
- `DELETE /api/following/:id` - Unfollow User
