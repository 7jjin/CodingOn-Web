const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CORS오류방지
app.use(cors());

//router 분리
const router = require("./routes");
app.use("/", router);

//오류처리
app.use("*", (req, res) => {
    res.status(404).render("404");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
