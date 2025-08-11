"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var neon_http_1 = require("drizzle-orm/neon-http");
var schema = require("./schema");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env" });
var db = (0, neon_http_1.drizzle)(process.env.DATABASE_URL, { schema: schema });
exports.db = db;
