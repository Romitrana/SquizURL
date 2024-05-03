const express = require("express");
const app = express();
const router = require("./router/route");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static("./public"));
app.use("/shorthener", router);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
