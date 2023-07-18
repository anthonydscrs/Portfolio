const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .ruleset.min(6)
    .max(30)
    .rule({ message: "Password must be between 6 and 30 characters" })
    .required(),
});

// Validate the user input registering as a user
const validateUser = async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = userSchema.validate(
    { email, password },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json({ validationErrros: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
