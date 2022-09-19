const router = require("express").Router();
const category = require("../controllers/category");

router.get("/create", category.create);
router.post("/add", category.add);
router.get("/listofcategories", category.read);
router.get("/readbyId/:id", category.readbyId);
router.put("/update/:id", category.update);
router.delete("/delete/:id", category.delete);

module.exports = router;