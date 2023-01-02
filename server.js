// 웹 서버 만든것임
const express = require("express");
const app = express();

app.use("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080);

// 이건 웹소켓 열기 코드
const WebSocket = require("ws");

const socket = new WebSocket.Server({
  port: 8081,
});

// 웹소켓으로 오는 유저메세지 받으려고 만든 코드(수신하려고)
socket.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log("유저가 보낸거 : " + msg);
    ws.send("응 안녕"); //이건 웹소켓으로 서버 -> 유저 메세지 보내기위해 쓴 코드
  });
});

//ws 대신 socket.io 라이브러리 쓰면 좋은 점
// - 연결 끊기면 자동재접속 기능
// - 웹소켓 접속자마다 자동 id 부여
// - 모든 웹소켓유저에게 전체 메세지 전송 가능
// - 웹소켓방을 생성 가능
