import io from "socket.io-client";
import ENDPOINT from "./ENDPOINT";

export const socket = io(ENDPOINT + "/");
