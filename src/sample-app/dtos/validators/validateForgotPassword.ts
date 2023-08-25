import Joi from "@hapi/joi";

// Joi extension
const Jois = Joi.extend(require("joi-phone-number"));

export const forgotPasswordReqSchema = Jois.object({
  username: Jois.string().required(),
});

export default forgotPasswordReqSchema;
