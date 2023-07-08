const { Router } = require("express");
const {
  createAdvertisingController, getAllAdvertisingController,
} = require("../../controllers/advertisings/advertisingController");
const validation = require("../../middlewares/validationMiddleware");
const {
  createAdvertisingSchema,
} = require("../../validations/advertisings/advertisingValidation");

const router = Router();

router.post("/", validation(createAdvertisingSchema), createAdvertisingController);
router.get("/", getAllAdvertisingController);

module.exports = router;
