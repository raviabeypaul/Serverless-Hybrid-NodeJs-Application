import Joi from "@hapi/joi";

export const logoutReqSchema = Joi.object({
  token: Joi.string().required()
});

export default logoutReqSchema;
