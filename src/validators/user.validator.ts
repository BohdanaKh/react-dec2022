import Joi from "joi";

const userValidator = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),

});

export {
    userValidator
}