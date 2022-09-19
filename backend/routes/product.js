const router = require("express").Router();
const product = require("../controllers/product");

router.get("/create", product.create);
router.post("/add", product.add);
router.get("/read/:id", product.readbyId);
router.get("/listofproducts/:skip", product.read);
router.put("/update/:id", product.update);
router.delete("/delete/:id", product.delete);

module.exports = router;