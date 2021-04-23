export const alphaNumericRegex = new RegExp('^[a-zA-Z0-9 ]*$');
export const alphaWithSpaceRegex = new RegExp('^[a-zA-Z ]*$');
export const emailIdRegex = new RegExp('^[a-zA-Z][A-Za-z0-9-_]*$');
export const numberCheckRegex = new RegExp('\\d');
export const onlyNumberRegex = new RegExp('^[0-9]*$');
export const validateAddressRegex = new RegExp('^[#.0-9a-zA-Z \\s,-]+$');
export const noSpaceRegex = new RegExp('^[a-zA-Z0-9!-~]*$');
export const lowerCaseRegex = /[a-z]+/g;
export const uppercaseRegex = /[A-Z]+/g;
export const numberRegex = /[0-9]+/g;
export const specialCharRegex = /['\/\\!"#$%&()*+,-.\/:;<=>?@[\]^_`{|}~\/]+/g; // eslint-disable-line no-useless-escape
    