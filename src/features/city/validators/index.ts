import * as Yup from "yup";

const cityNameValidation = Yup.string()
    .trim()
    .required("City required")

export const searchCityValidator = Yup.object({
    name: cityNameValidation,
});
