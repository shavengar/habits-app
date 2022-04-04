const passport = require("passport");
const { Strategy } = require("passport-jwt");
const query = require("../config/mysql.config");

const cookieJWTExtractor = (req) => {
  if (req && req.cookies) {
    return req.cookies.access_token;
  }
  return null;
};

const jwtOptions = {
  secretOrKey: process.env.SECRET_KEY,
  jwtFormRequest: cookieJWTExtractor,
};

passport.use(
  "jwt",
  new Strategy(jwtOptions, async function (jwt_payload, done) {
    try {
      if (!jwt_payload || !jwt_payload.id) {
        return done(null, false, "Invalid credentials.");
      }
      const [user] = await query(
        "SELECT id, username FROM users WHERE users.id = ?",
        [jwt_payload.id]
      );
      if (!user) {
        return done(null, false, "Invalid credentials.");
      }
      return done(null, user);
    } catch (err) {
      return done(true, false, "Something went wrong.");
    }
  })
);

module.exports = passport;
