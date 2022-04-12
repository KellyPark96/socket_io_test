import express from "Express";

const app = express();
const PORT = process.env.PORT || 4000;
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const handleHome = (req, res) => {
	res.sendFile(__dirname + "/socket.html");
	// return res.send("<h1>Hello World</h1>");
};

app.get("/", handleHome);

io.on("connection", (socket) => {
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});
});

server.listen(PORT, () => {
	console.log("listening on *:4000");
});
