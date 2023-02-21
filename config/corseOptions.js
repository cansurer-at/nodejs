const whitelist = [
  "https://www.yoursite.com",
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:3500/register",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true, // Set this to true to allow cookies to be sent with the request
};

module.exports = corsOptions;