# Blog Application

A simple blog application with functionality to create posts, comment on posts, and like/dislike posts. Built using Node.js, Express, and MongoDB.

## Features
- Create blog posts.
- Comment on posts.
- Like/Dislike posts.
- Fetch all posts along with associated likes and comments.

## Prerequisites
- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) for the database.
  
Ensure MongoDB is running on your local machine or cloud (if using MongoDB Atlas).

## Environment Variables
The project requires a `.env` file in the root directory with the following environment variables:

```bash
PORT=4000
DATABASE_URL=mongodb://localhost:27017/blogAppDatabase
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd blogApp
```

3. Install dependencies:

```bash
npm install
```

4. Start the MongoDB server (if it's not running):

```bash
mongod
```

## Running the Application

To start the application, you have two options:

1. **Start with Node.js**:

```bash
npm start
```

2. **Start in Development Mode (with Nodemon)**:

```bash
npm run dev
```

The app will be running on `http://localhost:4000` by default.

## API Endpoints

Here are the available API endpoints for the application:

| Method | Endpoint                  | Description                               |
|--------|---------------------------|-------------------------------------------|
| POST   | `/api/v1/comments/create` | Create a new comment on a post            |
| POST   | `/api/v1/posts/create`    | Create a new post                         |
| GET    | `/api/v1/posts`           | Fetch all posts along with likes/comments |
| POST   | `/api/v1/likes/like`      | Like a post                               |
| POST   | `/api/v1/likes/dislike`   | Dislike a post                            |

## Project Structure

```bash
├── config
│   └── database.js         # MongoDB connection
├── controllers
│   ├── commentController.js # Logic for comments
│   ├── likeController.js    # Logic for likes/dislikes
│   └── postController.js    # Logic for posts
├── models
│   ├── commentModel.js      # Comment schema
│   ├── likeModel.js         # Like schema
│   └── postModel.js         # Post schema
├── routes
│   └── blog.js              # API routes
├── .env                     # Environment variables
├── index.js                 # Entry point of the app
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## How It Works

1. **Database Connection:**
   - The application connects to MongoDB using the `mongoose` library. Connection details are pulled from the `.env` file.

2. **Creating a Post:**
   - Users can create a post by sending a request to `/api/v1/posts/create` with the `title` and `body` in the request body.

3. **Liking a Post:**
   - Users can like a post by sending a request to `/api/v1/likes/like` with the `post` and `user` fields in the request body.
   - Dislikes can be registered via the `/api/v1/likes/dislike` endpoint.

4. **Commenting on a Post:**
   - Users can comment on a post by sending a request to `/api/v1/comments/create`, providing the `post`, `user`, and `body` in the request.

5. **Fetching All Posts:**
   - The application retrieves all posts, including their associated likes and comments, via the `/api/v1/posts` endpoint.

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **dotenv**: For managing environment variables.
- **Nodemon**: Automatically restarts the server during development.
