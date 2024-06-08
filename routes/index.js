var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const prisma = new PrismaClient();
  const pints = await prisma.pint.findMany();
  res.render("index", { title: "Pints!", pints: pints });
});

module.exports = router;
