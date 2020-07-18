const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const Auth = require("./routes/Auth");
const connectDB = require("./config/db");
const onConnect = require("./utils/onConnect");
const error = require("./middleware/error");
const morgan = require("morgan");

const app = express();

// Connect DB
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/api/auth", Auth);

app.use(error);

const server = http.createServer(app);

const io = socketio(server);

io.on("connect", (socket) => onConnect(socket));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
