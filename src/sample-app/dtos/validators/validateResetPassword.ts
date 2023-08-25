import Joi from "@hapi/joi";

// Joi extension
const Jois = Joi.extend(require("joi-phone-number"));

export const resetPasswordReqSchema = Jois.object({
  token: Joi.string().required(),
  password: Jois.string().required(),
  confirmPassword: Jois.string().required()
});

export default resetPasswordReqSchema;