// import json-server and cors
const jsonServer = require("json-server");
const cors = require("cors");

// create a json server instance
const mediaServer = jsonServer.create();

// define allowed origins (your deployed frontend)
const allowedOrigins = ["https://media-player-front-fawn.vercel.app"];

// enable cors with options
mediaServer.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

// middleware to parse json and serve static files
const middleware = jsonServer.defaults();

// setup path for db.json file
const router = jsonServer.router("db.json");

// middleware to use the router
mediaServer.use(middleware);
mediaServer.use(router);

// port for the server
const PORT = process.env.PORT || 10000;
mediaServer.listen(PORT, () => {
  console.log(`Media server is running on port ${PORT}`);
});
