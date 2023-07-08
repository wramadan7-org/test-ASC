const httpStatus = require("http-status");
const mongoose = require("mongoose");
const { Sale, sequelize } = require("../../models/postgre");
const Advertising = require("../../models/mongo/Advertising");
const { updatePriceService } = require("../../services/sales/saleService");
const CustomError = require("../../middlewares/customError");
const {
  getAllAdvertisingService,
} = require("../../services/advertisings/advertisingService");
const {
  getAllTransactionsService,
  createTransactionService,
} = require("../../services/transactions/transactionService");

const transactionController = async (req, res, next) => {
  const { price } = req.body;
  const { id } = req.params;

  try {
    if (!id) return res.sendWrapped("Id params is not allowed to be empty");

    const transaction = await createTransactionService(price, id);

    res.sendWrapped("Transaction successfully", httpStatus.OK);
  } catch (error) {
    next(error);
  }
};

const getAllTransactionController = async (req, res, next) => {
  try {
    const transactions = await getAllTransactionsService();

    let total = 0;

    for (transaction of transactions) {
      total += transaction.sale.price;
    }

    const result = {
      transactions,
      total,
    };

    res.sendWrapped("List transaction", httpStatus.OK, result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  transactionController,
  getAllTransactionController,
};
