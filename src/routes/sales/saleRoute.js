const { Router } = require("express");
const {
  createSaleController,
  getAllSaleController,
} = require("../../controllers/sales/saleController");
const validation = require("../../middlewares/validationMiddleware");
const { createSaleSchema } = require("../../validations/sales/saleValidation");

const router = Router();

router.post("/", validation(createSaleSchema), createSaleController);
router.get("/", getAllSaleController);

module.exports = router;
