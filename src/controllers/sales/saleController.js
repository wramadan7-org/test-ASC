const httpStatus = require("http-status");
const CustomError = require("../../middlewares/customError");
const {
  createSaleService,
  getAllSaleService,
} = require("../../services/sales/saleService");

const createSaleController = async (req, res, next) => {
  const { id_ad, id_company, ad_name, company_name, price } = req.body;

  try {
    const data = {
      id_company,
      ad_name,
      company_name,
      price,
    };
    const sale = await createSaleService(data);

    res.sendWrapped(
      "Successfully create transaction",
      httpStatus.CREATED,
      sale
    );
  } catch (error) {
    next(error);
  }
};

const getAllSaleController = async (req, res, next) => {
  try {
    const sales = await getAllSaleService();
    let total = 0;

    for (const sale of sales) {
      total += sale.price;
    }

    const result = {
      sales,
      total,
    };

    res.sendWrapped("List sale", httpStatus.OK, result);
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

module.exports = {
  createSaleController,
  getAllSaleController,
};
