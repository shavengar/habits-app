const query = require("../config/mysql.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(res, username, password) {
  try {
    const [user] = await query("SELECT * FROM USERS WHERE users.username = ?", [
      username,
    ]);
    if (!user) {
      return res.send({
        data: null,
        success: false,
        error: "Invalid username or password.",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.send({
        data: null,
        success: false,
        error: "Invalid username or password.",
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .send({
        data: { id: user.id, username: user.username },
        success: true,
        error: null,
      });
  } catch (err) {
    console.log(err);
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function signup(res, username, password) {
  try {
    const [inUse] = await query(
      "SELECT username FROM users WHERE users.username = ?",
      [username]
    );
    if (inUse) {
      return res.send({
        data: null,
        success: false,
        error: "Username already in use.",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    await query("INSERT INTO users (username, password) VALUES (?,?)", [
      username,
      hash,
    ]);
    return res.send({
      data: "Signup successful! Please login.",
      success: true,
      error: null,
    });
  } catch (err) {
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { login, signup };
