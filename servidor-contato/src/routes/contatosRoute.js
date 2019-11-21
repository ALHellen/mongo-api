const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByNome)
router.get("/id/:id", controller.getById)
router.post("/criar", controller.add)
router.delete("/delete/:id", controller.deleteById)
router.patch("/patch/:id", controller.updateById)


module.exports = router
