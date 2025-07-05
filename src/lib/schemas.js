"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formSchema = void 0;
const zod_1 = require("zod");
const formSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    gmail: zod_1.z.string().email('Invalid email address').min(1, 'Email is required'),
    password: zod_1.z
        .string()
        .min(8, '8 or more characters')
        .regex(/[A-Z]/, 'Uppercase and lowercase letters'),
});
exports.formSchema = formSchema;
