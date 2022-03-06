const query = require("../config/mysql.config");

const bcrypt = require("bcrypt");

async function login(res, username, password) {
    try {
        const [user] = await query(
            "SELECT username FROM USERS WHERE users.username === ?",
            [username]
        );
        if (!user) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid username or password.",
            });
        }
        const match = bcrypt.compare(password, user.password);
        if (!match) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid username or password.",
            });
        }
        return res.send({
            data: { id: user.id, username: user.username },
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
        const hash = bcrypt.hash(password, 10);
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
