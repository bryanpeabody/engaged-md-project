import luhn from "luhn"

export const validateCreditCardNumber = (ccNum: string) => {
     return luhn.validate(ccNum);
}