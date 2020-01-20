import * as dotenv from 'dotenv';
dotenv.config();

const config = require(`./environments/${process.env.NODE_ENV}`) || {};

export default config;