const dotenv = require("dotenv");
dotenv.config();

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const { PORT, HOST, HOST_URL, SERVICE, EMAIL_USER, EMAIL_PASS, DB_USER, DB_SERVER,  DB_PASS, DB_DATABASE } =
  process.env;

const sqlEncrypt = process.env.DB_ENCRYPT === "true";

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  service: SERVICE,
  username: EMAIL_USER,
  userpass: EMAIL_PASS,
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




