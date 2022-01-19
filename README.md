# Forum app

Simple forum made with React, Express and MongoDb.

## How to use

Download the project, run `npm install && cd client && npm install`, then create a `.env` file in the root folder with this data:

```
PORT=5005
ORIGIN=http://localhost:3000

MONGODB_URI=mongodb://localhost/forum-app

EMAIL=your.email@gmail.com
WORD=YourPassword

CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret
```

### Seed data

If you want to create fake data, you can use the json files in the `db/exports-mongo` folder. Simply import all the files to MongoDb.

## Login

If you are using the demo seeds, you can use `admin@email.com` and `Password42` as credentials.

## Features

-   Create / edit / delete account.
-   Create / edit / delete topic.
-   Admin can delete and edit other users posts.
-   Answer to topics.
-   Like topics.
-   Notifications are sent to the user who created the topic when someone posts an answer or likes it.
-   Users can contact other users with internal messages.
