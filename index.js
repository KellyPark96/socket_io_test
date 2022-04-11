import express from "Express";

const app = express();
const PORT = 4000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const handleHome = (req, res) => {
	res.sendFile(__dirname + "/index.html");
	// return res.send("<h1>Hello World</h1>");
};

app.get("/", handleHome);

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(PORT, () => {
	console.log("listening on *:4000");
});
