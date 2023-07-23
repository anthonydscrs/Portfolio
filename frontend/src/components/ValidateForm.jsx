import Joi from "joi";

const ValidateForm = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email est requis",
      "string.email": "Email doit être valide",
      "any.required": "Email doit être valide",
    })
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .messages({
      "string.empty": "Le mot de passe est requis",
      "string.min": "Le mot de passe doit contenir au moins 6 caractères",
      "string.max": "Le mot de passe ne peut pas dépasser 30 caractères",
      "any.required": "Le mot de passe est requis",
    })
    .required(),
});

export default ValidateForm;
