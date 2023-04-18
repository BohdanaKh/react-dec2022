import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().required(),
    id: Joi.number().required(),
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    email: Joi.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
    body: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]$/).required(),

});

export {
    commentValidator
}