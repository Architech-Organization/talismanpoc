// default app configuration
const port = process.env.PORT || 4000;
let db = process.env.MONGODB_URI || "mongodb://localhost:27017/nodegoat";

module.exports = {
    port,
    db,
    cookieSecret: "4SF2SMQfF37yvq86VSCzqagvpNNt56", //session_cookie_secret_key_here
    cryptoKey: "8T7tk8dx44ls6CobQh7IF5e2U6baBlVZbA", //a_secure_key_for_crypto_here
    cryptoAlgo: "aes256",
    hostName: "localhost",
    environmentalScripts: []
};

