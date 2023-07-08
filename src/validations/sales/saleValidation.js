const Joi = require("joi");

const createSaleSchema = Joi.object({
  ad_name: Joi.string()
    .min(3)
    .max(20)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Ad name is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Ad name must be at least ${err.local.limit} characters long`;
            break;
          case "string.max":
            err.message = `Ad name cannot exceed ${err.local.limit} characters`;
            break;
          case "any.required":
            err.message = "Ad name is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  company_name: Joi.string()
    .min(3)
    .max(20)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Company name is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Company name must be at least ${err.local.limit} characters long`;
            break;
          case "string.max":
            err.message = `Company name cannot exceed ${err.local.limit} characters`;
            break;
          case "any.required":
            err.message = "Company name is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  price: Joi.number()
    .integer()
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "number.base":
            err.message = "Price must be a number";
            break;
          case "any.required":
            err.message = "Price is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

module.exports = {
  createSaleSchema,
};
