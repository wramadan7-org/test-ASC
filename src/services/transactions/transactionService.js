const { Sale, sequelize } = require("../../models/postgre");
const Advertising = require("../../models/mongo/Advertising");
const { getAllSaleService } = require("../sales/saleService");
const CustomError = require("../../middlewares/customError");

const createTransactionService = async (price, id) => {
  try {
    const t = await sequelize.transaction();
    const updateSale = await Sale.update(
      { price },
      { where: { id }, transaction: t }
    );

    console.log("sale", updateSale);

    const updateStatus = await Advertising.updateOne(
      { idSale: id },
      { $set: { status: "done" } }
    );

    console.log("advertising", updateStatus);

    await t.commit();
    const data = {
      updateSale,
      updateStatus,
    };
    return data;
  } catch (error) {
    await t.rollback();
    throw new CustomError(error, 500);
  }
};

const getAllTransactionsService = async () => {
  try {
    const sales = await getAllSaleService();
    let total = 0;
    const map = Promise.all(
      sales.map(async (o) => {
        const advertising = await Advertising.findOne({ idSale: o.id });

        const data = {
          sale: o,
          advertising,
        };

        return data;
      })
    );
    
    return map;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

module.exports = {
  createTransactionService,
  getAllTransactionsService,
};
