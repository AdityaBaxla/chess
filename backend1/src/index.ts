import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8080 });

const gameManger = new GameManager();

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  gameManger.addUser(ws);
  ws.on("disconnect", () => gameManger.removeUser(ws));
});
