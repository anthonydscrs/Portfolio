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

const projectUpdateSchema = Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().min(1).required(),
  website: Joi.string().min(1).required(),
  picture: Joi.string().min(1).required(),
  github: Joi.string().min(1).required(),
  date: Joi.string().min(1).required(),
  Htmlcss: Joi.string().min(1).required(),
  Javascript: Joi.string().min(1).required(),
  React: Joi.string().min(1).required(),
  Node: Joi.string().min(1).required(),
  Express: Joi.string().min(1).required(),
  MySQL: Joi.string().min(1).required(),
});

// Validate the project input  updating they information
const validateProjectUpdate = async (req, res, next) => {
  const {
    name,
    description,
    website,
    picture,
    github,
    date,
    Htmlcss,
    Javascript,
    React,
    Node,
    Express,
    MySQL,
  } = req.body;

  const { error } = projectUpdateSchema.validate(
    {
      name,
      description,
      website,
      picture,
      github,
      date,
      Htmlcss,
      Javascript,
      React,
      Node,
      Express,
      MySQL,
    },
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
  validateProjectUpdate,
};
