const { Sale } = require("../../models/postgre");
const CustomError = require("../../middlewares/customError");

const createSaleService = async (data) => {
  try {
    const sale = await Sale.create(data);

    return sale;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

const getOneSaleService = async (id_ad) => {
  try {
    const sale = await Sale.findOne({ where: { id_ad } });

    return sale;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

const getAllSaleService = async () => {
  try {
    const sales = await Sale.findAll();

    return sales;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

const updatePriceService = async (data, id_ad, transaction) => {
  try {
    const price = await Sale.update(data, {
      where: { id_ad },
      transaction,
    });

    return price;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

module.exports = {
  createSaleService,
  getOneSaleService,
  getAllSaleService,
  updatePriceService,
};
