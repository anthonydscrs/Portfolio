import Joi from "joi";

const ValidateFormUpdateProject = Joi.object({
  name: Joi.string()
    .min(1)
    .messages({
      "string.empty": "Le nom est requis",
      "string.min": "Le nom doit contenir au moins 1 caractère",
      "any.required": "Le nom est requis",
    })
    .required(),
  description: Joi.string()
    .min(1)
    .messages({
      "string.empty": "Le nom du contact est requis",
      "string.min": "Le nom doit contenir au moins 1 caractère",
      "any.required": "Le nom est requis",
    })
    .required(),
  website: Joi.string()
    .min(1)
    .messages({
      "string.empty": "Decription est requis",
      "string.min": "Decription doit contenir au moins 1 caractère",
      "any.required": "Decription est requis",
    })
    .required(),
  picture: Joi.string()
    .min(1)
    .messages({
      "string.empty": "Le nom de la ville est requis",
      "string.min": "Le nome de la ville doit contenir au moins 1 caractére",
      "any.required": "Le nom de la ville est requis",
    })
    .required(),
  github: Joi.string()
    .min(1)
    .messages({
      "string.empty": "Le nom de la ville est requis",
      "string.min": "Le nome de la ville doit contenir au moins 1 caractére",
      "any.required": "Le nom de la ville est requis",
    })
    .required(),
});

export default ValidateFormUpdateProject;
