const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
const PORT = 8081;
// file system 약자 node 자체 라이브러리
const fs = require('fs');

const dotenv = require("dotenv"); //.env 파일을 읽어올 수 있다.
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ test: "hey" });
});

// 파일을 읽어서 리턴
app.get("/api/data", (req, res) => {
  //uploads/chart.json을 읽어서 리턴
  try {
    fs.readFile('./uploads/chart.json','utf8',(error,data)=>{
      if(error){
        console.log(error);
      }
      return res.json(JSON.parse(data));
    })
  } catch (error) {
    return res.json(error);
  }

  

});

// 요청을 보내고 값을 파일로 저장하는 역할
app.post("/api/data", async(req, res) => {
 



  const url = "https://openapi.naver.com/v1/datalab/search";
  const headers = {
    "X-Naver-Client-Id": process.env.CLIENT_ID,
    "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
    "Content-Type": "application/json",
  };

  const request_body={
    // 필수값 startDate,endDate,timeUnit,keywordGroups,keywordGroups.groupName,keywordGroups.keywords
    // startDate:"2022-01-01",
    startDate:req.body.startDate,

    // endDate:"2023-03-17",
    endDate:req.body.endDate,

    // date/week/month
    // timeUnit:"month",
    timeUnit:req.body.timeUnit,

    // keywordGroups:[
    //   {
    //     groupName: "치킨",
    //     keywords:["치킨","BBQ","BHC"]
    //   },
    //   {
    //     groupName: "삼겹살",
    //     keywords:["삼겹살","고기"]
    //   }
    // ]
    keywordGroups:req.body.keywordGroups

  }
  console.log(request_body);
  try {
    const result = await axios.post(url,request_body,{headers
    });
    // result.data.results -> 파일로 저장
    // JSON.stringfy -> JSON -> 문자열
    // JSON.parse -> 문자열 -> JSON
    fs.writeFile("./uploads/chart.json",JSON.stringify(result.data.results),function(err){
      console.log(err);
    });
    return res.json(result.data.results);
  } 
  catch (error) {
    return res.json(error);
  }
});

// 파일 삭제
app.delete("/api/data", (req, res) => {
  return res.json({ test: "3" });
});

app.listen(PORT, () => console.log(`${PORT} 서버 가동중`));
