const Joi = require("joi");

const createAdvertisingSchema = Joi.object({
  advertisingType: Joi.string()
    .min(2)
    .max(20)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising type is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising type must be at least ${err.local.limit} characters long`;
            break;
          case "string.max":
            err.message = `Advertising type cannot exceed ${err.local.limit} characters`;
            break;
          case "any.required":
            err.message = "Advertising type is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    advertisingName: Joi.string()
    .min(2)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising name is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising name must be at least ${err.local.limit} characters long`;
            break;
          case "any.required":
            err.message = "Advertising name is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    advertisingContent: Joi.string()
    .min(2)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising content is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising content must be at least ${err.local.limit} characters long`;
            break;
          case "any.required":
            err.message = "Advertising content is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    advertisingSlogan: Joi.string()
    .min(2)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising slogan is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising slogan must be at least ${err.local.limit} characters long`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    advertisingMedia: Joi.string()
    .min(2)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising media is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising media must be at least ${err.local.limit} characters long`;
            break;
          case "any.required":
            err.message = "Advertising media is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    advertisingDescription: Joi.string()
    .min(2)
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Advertising description is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Advertising description must be at least ${err.local.limit} characters long`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    companyName: Joi.string()
    .min(2)
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
          case "any.required":
            err.message = "Company name is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    companyAddress: Joi.string()
    .min(2)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Company address is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Company address must be at least ${err.local.limit} characters long`;
            break;
          case "any.required":
            err.message = "Company address is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
    companyContact: Joi.string()
    .min(2)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.code) {
          case "string.empty":
            err.message = "Company contact is not allowed to be empty";
            break;
          case "string.min":
            err.message = `Company contact must be at least ${err.local.limit} characters long`;
            break;
          case "any.required":
            err.message = "Company contact is required";
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});

module.exports = {
  createAdvertisingSchema,
};
