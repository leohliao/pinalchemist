```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Leo"
    },
    errors: []
  },

  users: {
    1: {
      id: 1,
      username: "Leo",
      image_url: "/assets/Leo.png",
      description: "artists",
      pins: [1, 2, 4, 7],
      boards: [1, 2, 3],
      follows: {
        followers: [2, 4, 5],
        following: [1, 2]
      }
    },
    2: {
      id: 2,
      username: "Stanley",
      ...
    }
  },

  pins: {
    pins: {
      1: {
        id: 2,
        title: "Stealth Suit",
        url: "http://www.artstation.com/",
        image_url: "http://www.artstation.com/image",
        description: "Game assests for art",
        user_id: 5
      },
      2: {
        id 3:,
        title: "Vehicle Modeling",
        url: "http://www.artstation.com",
        image_url: "http://www.artstation.com/image",
        description: "Game assest for vehicle",
        user_id: 4
      },
      3: {
        ...
      }
    },
    errors: []
  },

  boards: {
    1: {
      id: 1,
      name: "My CG Artist Collection",
      description: "Cool Game Assests",

      user_id: 1
    },
    2: {
      ...
    },
    errors: []
  }
}
```
