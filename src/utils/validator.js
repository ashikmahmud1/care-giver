// JOI BROWSER for validation
import Joi from 'joi-browser';


const validateProperty = ({ name, value }, schema) => {
    const obj = { [name]: value };
    schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
};


export const validate = (form, schema) => {
    // **************************** Validation implementation with joi-browser library ***************************
    const options = { abortEarly: false };
    const result = Joi.validate(form, schema, options);
    if (!result.error) return null;
    const new_errors = {};
    for (let item of result.error.details)
        new_errors[item.path[0]] = item.message;
    return new_errors;
};

export const checkError = (input, errors, schema) => {
    const new_errors = { ...errors };
    const errorMessage = validateProperty(input, schema);
    if (errorMessage) new_errors[input.name] = errorMessage;
    else delete new_errors[input.name];
    
    return new_errors;
};