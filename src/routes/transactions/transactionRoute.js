const { Router } = require("express");
const {
  transactionController,
  getAllTransactionController,
} = require("../../controllers/transactions/transactionController");

const router = Router();

router.post("/:id", transactionController);
router.get("/", getAllTransactionController);

module.exports = router;
