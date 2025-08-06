// import json-server
const jsonServer = require("json-server");

// create a json server instance
const mediaServer = jsonServer.create();

// middleware to parse json
const middleware = jsonServer.defaults();

// setup path for db.json file
const router = jsonServer.router("db.json");

// middleware to use the router
mediaServer.use(middleware);
mediaServer.use(router);


// port for the server
const PORT = process.env.PORT || 4000;

// to listen to the request from the frontend to resolve the request.
mediaServer.listen(PORT, () => {
    console.log(`Media server is running on port ${PORT}`);
});