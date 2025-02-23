// const http = require("http")
// const express = require("express")
// const {Server,Socket} = require("socket.io")
import http from 'http';
import express from 'express';
import {Server,Socket} from "socket.io";

const app = express();

const server = http.createServer(http);
const io = new Server(server);

io.on('connection',(socket:Socket)=>{
    console.log("a user connected");
})

server.listen(3000,()=>{
    console.log("Server Started");
})