const Advertising = require("../../models/mongo/Advertising");
const CustomError = require("../../middlewares/customError");

const createAdvertisingService = async (data) => {
  try {
    const advertising = await Advertising.create(data);

    return advertising;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

const getOneAdvertisingService = async (id) => {
  try {
    const advertising = await Advertising.findOne({ _id: id });

    return advertising;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

const getAllAdvertisingService = async () => {
  try {
    const advertisings = await Advertising.find();

    return advertisings;
  } catch (error) {
    throw new CustomError(error, 500);
  }
};

module.exports = {
  createAdvertisingService,
  getOneAdvertisingService,
  getAllAdvertisingService,
};
