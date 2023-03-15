const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { pool } = require("./db");

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "전체 메뉴 목록 조회에 실패하였습니다",
    });
    //console.log(error);
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        SELECT * FROM menus 
        WHERE id=${req.params.id}
      `
    );
    if (!data[0].length) {
      return res.json({
        success: false,
        message: `id:${req.params.id} 메뉴 목록 조회에 실패하였습니다`,
      });
    }
    if (data[0][0]) {
      return res.json(data[0][0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: `id:${req.params.id} 메뉴 목록 조회에 실패하였습니다`,
    });
    //console.log(error);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    const data = await pool.query(
      `
        INSERT INTO menus 
        (name, description, image_src) 
        VALUES 
        ("${req.body.name}", "${req.body.description}", "${req.body.image_src}")
      `
    );
    if (data[0].affectedRows) {
      const data2 = await pool.query("SELECT * FROM menus");
      if (data2[0]) {
        return res.json(data2[0]);
      }
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.patch("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE menus 
        SET name="${req.body.name}", description="${req.body.description}", image_src="${req.body.image_src}"
        WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM menus WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

// orders

app.get("/api/orders", async (req, res) => {
  try {
    const data = await pool.query(
      ` SELECT A.id,quantity,request_detail,name,description FROM orders A INNER JOIN menus B ON A.menus_id = B.id ORDER BY A.id`
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "전체 주문 목록 조회에 실패하였습니다",
    });
    //console.log(error);
  }
});
/*

SELECT * 
FROM ORDERS A
INNER JOIN POINT B
ON A.ID = B.ID

*/
app.get("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
     

        SELECT * FROM orders 
        WHERE id=${req.params.id}
      `
    );
    if (!data[0].length) {
      return res.json({
        success: false,
        message: `id:${req.params.id} 주문 목록 조회에 실패하였습니다`,
      });
    }
    if (data[0][0]) {
      return res.json(data[0][0]);
    }
  } catch (error) {
    return res.json({
      success: false,
      message: `id:${req.params.id}주문 목록 조회에 실패하였습니다`,
    });
    //console.log(error);
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const data = await pool.query(
      `
        INSERT INTO orders 
        (quantity, request_detail, menus_id) 
        VALUES 
        ("${req.body.quantity}", "${req.body.request_detail}", "${req.body.menus_id}")
      `
    );
    if (data[0].affectedRows) {
      const data2 = await pool.query("SELECT * FROM orders ORDER BY id DESC LIMIT 1");
      if (data2[0]) {
        return res.json({
          success: true,
          id : data2[0][0].id
        });
      }
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.patch("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE orders 
        SET quantity="${req.body.quantity}", request_detail="${req.body.request_detail}", menus_id="${req.body.menus_id}"
        WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM orders WHERE id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
