const winston = require('winston');
require('winston-papertrail').Papertrail;

const winstonPapertrail = new winston.transports.Papertrail({
  host: process.env.LOGGING_URL,
  port: process.env.LOGGING_PORT,
  hostname: process.env.LOGGING_HOST_NAME,
})

const logger = new winston.Logger({
   transports: [
     winstonPapertrail,
     new winston.transports.Console(),
   ]
 });

module.exports = logger;
