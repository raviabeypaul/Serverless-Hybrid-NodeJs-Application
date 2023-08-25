import Joi from "@hapi/joi";

// Joi extension
const Jois = Joi.extend(require("joi-phone-number"));

export const loginReqSchema = Jois.object({
  username: Jois.string().required(),
  password: Jois.string().required()
});

export default loginReqSchema;
