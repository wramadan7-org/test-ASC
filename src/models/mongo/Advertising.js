const mongoose = require("mongoose");

const advertisingSchema = new mongoose.Schema(
  {
    advertisingType: {
      type: String,
      required: true,
    },
    advertisingName: {
      type: String,
      required: true,
    },
    advertisingContent: {
      type: String,
      required: true,
    },
    advertisingSlogan: {
      type: String,
      required: false,
    },
    advertisingMedia: {
      type: String,
      required: true,
    },
    advertisingDescription: {
      type: String,
      required: false,
    },
    company: {
      companyName: {
        type: String,
        required: true,
      },
      companyAddress: {
        type: String,
        required: true,
      },
      companyContact: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["proccess", "done"],
    },
    idSale: {
      type: Number,
      integer: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Advertising = mongoose.model("Advertising", advertisingSchema);

module.exports = Advertising;
