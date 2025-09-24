# Code Challenge for Senior Fullstack Engineer (TypeScript/Node.js Focus)

## Code Challenge

### Challenge Overview

You are tasked with designing and implementing a simple RESTful API service in TypeScript using Node.js (Express or similar framework). This service will manage a collection of "Tasks" for a to-do application. The goal is to assess your ability to:

   Design and implement RESTful APIs with proper HTTP methods and status codes.
   Use TypeScript effectively with strong typing.
   Handle asynchronous operations and error handling.
   Implement basic authentication using JWT.
   Demonstrate clean, maintainable, and scalable code structure.
   (Bonus) Show understanding of API versioning and documentation.

### Requirements

1.  API Endpoints:

       `POST /api/v1/tasks`\
        Create a new task.\
        Request body: `{ "title": string, "description": string (optional) }`\
        Response: The created task object with a unique `id`, `title`, `description`, and `completed` (default false).
       `GET /api/v1/tasks`\
        Retrieve a list of all tasks.
       `GET /api/v1/tasks/:id`\
        Retrieve a single task by its `id`.
       `PUT /api/v1/tasks/:id`\
        Update a task's `title`, `description`, or `completed` status.
       `DELETE /api/v1/tasks/:id`\
        Delete a task by its `id`.

2.  Authentication:

       Protect all endpoints except `POST /api/v1/auth/login` with JWT-based authentication.
       Implement a simple `POST /api/v1/auth/login` endpoint that accepts `{ "username": string, "password": string }` and returns a JWT token if the credentials match a hardcoded user (e.g., username: "admin", password: "password123").
       Use a secret key for signing JWT tokens (hardcoded for this challenge).

3.  Data Storage:

       Use an in-memory data store (e.g., a simple array) to store tasks for the duration of the app runtime.
       Each task should have a unique identifier (UUID or incrementing number).

4.  Error Handling:

       Return appropriate HTTP status codes and error messages for invalid requests, unauthorized access, and not found resources.

5.  Bonus (Optional):

       Add basic OpenAPI (Swagger) documentation for the API.
       Implement API versioning as shown in the endpoint paths (`/api/v1/...`).

### Constraints

   The challenge should be completed within 30 minutes.
   Use only free, open-source libraries (e.g., Express, jsonwebtoken, uuid).
   No database setup is required; in-memory storage is sufficient.
   No frontend implementation is needed.

## External Resources

   [Express.js](https://expressjs.com/) - Web framework for Node.js
   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JWT implementation for Node.js
   [uuid](https://github.com/uuidjs/uuid) - For generating unique IDs
   [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express) (optional) - For API documentation

All these libraries are free and open-source and can be installed via npm.

## Relevant Technologies

   TypeScript
   Node.js
   Express.js (or similar Node.js framework)
   JWT Authentication
   RESTful API design
   Asynchronous programming (async/await)
   API versioning
   Basic API documentation (OpenAPI/Swagger) - optional