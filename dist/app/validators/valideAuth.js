"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAuth = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../helpers/validateHelper");
exports.ValidateAuth = [
    (0, express_validator_1.check)('email')
        .exists()
        .not()
        .notEmpty()
        .isEmail(),
    (0, express_validator_1.check)('password')
        .exists()
        .not()
        .notEmpty()
        .isString(),
    (req, res, next) => {
        (0, validateHelper_1.validateResult)(req, res, next);
    }
];
