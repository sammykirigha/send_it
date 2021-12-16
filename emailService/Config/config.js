const dotenv = require("dotenv");
dotenv.config();

<<<<<<< Updated upstream
const { PORT, HOST, HOST_URL, DB_USER, DB_SERVER, DB_PASS, DB_DATABASE , USERNAME, APIKEY} =
=======
const { PORT, HOST, HOST_URL, SERVICE, EMAIL_USER, EMAIL_PASS, DB_USER, DB_SERVER,  DB_PASS, DB_DATABASE } =
>>>>>>> Stashed changes
  process.env;

const sqlEncrypt = process.env.DB_ENCRYPT === "true";

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
<<<<<<< Updated upstream
  apikey:APIKEY,
  username:USERNAME,
=======
  service: SERVICE,
  username: EMAIL_USER,
  userpass: EMAIL_PASS,
>>>>>>> Stashed changes
  sql: {
    server: DB_SERVER,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASS,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      trustedConnection: true,
      encrypt: sqlEncrypt,
      trustServerCertificate: true,
      enableArithAbort: true,
    },
  },
};




