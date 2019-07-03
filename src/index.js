// PLEASE DON'T change function name

const DENOMINATORS = {H: 50, Q: 25, D: 10, N: 5, P: 1};
const MAX_CURRENCY = 10000;

module.exports = function makeExchange(currency) {
    "use strict";
    if (currency > MAX_CURRENCY) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let result = {};
    let remainder = currency;
    Object.keys(DENOMINATORS).forEach(function (k) {
        let val = DENOMINATORS[k];
        if (remainder >= val) {
            let div = ~~(remainder / val);
            result[k] = div;
            remainder = remainder - div * val;
        }
    });
    return result;
};
