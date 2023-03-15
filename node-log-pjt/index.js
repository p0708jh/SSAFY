const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/log");
const app = express();
app.use(morgan("dev"));
const PORT = 8080;

app.use(express.json());
const cors=require("cors");
app.use(cors());
app.use(express.static(__dirname + "/views"));

const fs=require("fs");

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let hours = today.getHours(); // 시
let format = year+"-"+(("00"+month.toString()).slice(-2))+"-"+(("00"+date.toString()).slice(-2))+"-"+hours;

app.get("/api/logs",(req,res)=>{
    logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.http("http 메세지");
  logger.debug("debug 메세지");

  fs.readFile(`./logs/${format}.log`,"utf-8",(err,data)=>{
    const datalines = data.split('\r\n').slice(0,-1);
    const datajson = datalines.map((data)=>JSON.parse(data));
    console.log(datajson);
    return res.json(datajson);
  });
});

app.listen(PORT, () => console.log(`${PORT} 서버 가동 중`));