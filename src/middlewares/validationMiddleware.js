const Joi = require("joi");

const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({
        status: 400,
        message: error.details[0].message,
      });
    }

    next();
  };
};

module.exports = validation;
