mkdir client
mkdir server

Here’s an elaboration on the middleware functions used in your Express server and their functionalities:

1. app.use('/posts', postRoutes):
   Purpose: This middleware routes all incoming requests that start with /posts to the postRoutes module.
   Functionality: When a request hits /posts (e.g., /posts/123), it delegates the handling to the postRoutes file where specific routes (like GET, POST, DELETE) for posts are defined. This keeps the main server file organized and focused on configuration.

2. app.use(bodyParser.json({ limit: "30mb", extended: true })):
   Purpose: This middleware parses incoming request bodies in JSON format.
   Functionality: When a request contains JSON data (e.g., from an API client), this middleware converts it into a JavaScript object so that it can be accessed via req.body. The limit: "30mb" sets a maximum request body size of 30 MB, which is useful when handling large payloads like image uploads. The extended: true allows for rich object encoding.

3. app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })):
   Purpose: This middleware parses URL-encoded data (from HTML forms or similar sources).
   Functionality: This converts URL-encoded data (like form submissions) into an object. The extended: true option allows for complex objects and arrays in URL-encoded form data. For example, nested objects in forms can be parsed into JavaScript objects.

4. app.use(cors()):
   Purpose: Enables Cross-Origin Resource Sharing (CORS).
   Functionality: CORS is a security feature implemented by browsers to prevent malicious sites from making requests to your server. By using this middleware, you allow or restrict which domains can interact with your API. For example, a React app hosted on http://localhost:3000 can interact with this Express server hosted on http://localhost:5000.

Middleware Overview:
Middleware in Express.js functions as a layer of code that processes requests and responses. Each app.use() adds a middleware function to the request-handling pipeline. Middleware can be used to:

Parse and modify incoming requests (bodyParser).
Add security or authentication checks.
Enable features like CORS to allow cross-origin requests.
Delegate specific routes to modules (postRoutes).
These middleware functions process requests sequentially, allowing you to handle various types of data and routing logic in your application.

client side-
App.js call various components with their relative stylings
api folder is initilized to get

The code uses Axios to make a GET request to the /posts endpoint on a local server running at http://localhost:5000. The fetchPosts function sends the request and returns the response. This is typically used in React components to retrieve and display posts from a backend API.
