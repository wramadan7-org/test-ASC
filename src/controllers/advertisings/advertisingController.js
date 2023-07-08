const httpStatus = require("http-status");
const {
  createAdvertisingService,
  getAllAdvertisingService,
} = require("../../services/advertisings/advertisingService");
const { createSaleService } = require("../../services/sales/saleService");
const CustomError = require("../../middlewares/customError")

const createAdvertisingController = async (req, res, next) => {
  const {
    advertisingType,
    advertisingName,
    advertisingContent,
    advertisingSlogan,
    advertisingMedia,
    advertisingDescription,
    advertisingImage,
    companyName,
    companyAddress,
    companyContact,
  } = req.body;

  try {
    const dataSale = {
      ad_name: advertisingName,
      company_name: companyName,
      price: 0,
    };

    const sale = await createSaleService(dataSale);

    const dataAdvertising = {
      advertisingType,
      advertisingName,
      advertisingContent,
      advertisingSlogan,
      advertisingMedia,
      advertisingDescription,
      company: {
        companyName,
        companyAddress,
        companyContact,
      },
      status: "proccess",
      idSale: sale.id
    };

    const advertising = await createAdvertisingService(dataAdvertising);

    const result = {
      advertising,
      sale,
    };

    res.sendWrapped(
      "Successfully create advertising",
      httpStatus.CREATED,
      result
    );
  } catch (error) {
    next(error);
  }
};

const getAllAdvertisingController = async (req, res, next) => {
  try {
    const advertisings = await getAllAdvertisingService();

    res.sendWrapped("List advertising", httpStatus.OK, advertisings);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAdvertisingController,
  getAllAdvertisingController,
};
