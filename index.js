import express from "Express";

const app = express();

const PORT = 4000;

const http = require("http");

const server = http.createServer(app);

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

server.listen(PORT, () => {
	console.log("listening on *:3000");
});
