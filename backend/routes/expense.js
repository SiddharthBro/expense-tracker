const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.json({ message: "Expense route working" });
});

router.post("/add", (req, res) => {
const { title, amount } = req.body;

res.json({
message: "Expense added",
data: { title, amount }
});
});

module.exports = router;