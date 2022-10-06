"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing npm modules
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
// importing routers
const loginRoutes_1 = require("./routes/loginRoutes");
// ---
const app = (0, express_1.default)();
// ---
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['string'] }));
app.use(loginRoutes_1.router);
// ---
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
