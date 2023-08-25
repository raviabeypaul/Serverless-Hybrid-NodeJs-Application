import Joi from "@hapi/joi";

// Joi extension
// const Jois = Joi.extend(require("joi-phone-number"));

export const requestTokenReqSchema = Joi.object({
  refreshToken: Joi.string().required()
});

export default requestTokenReqSchema;
