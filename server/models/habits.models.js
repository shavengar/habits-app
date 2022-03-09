const query = require("../config/mysql.config");
const { addArt } = require("./art.models");

async function addHabit(res, habit) {
    try {
        let { insertId } = await query("INSERT INTO habits SET ?", [habit]);
        let newHabit = await query("SELECT * FROM habits WHERE id = ?", [
            insertId,
        ]);
        return res.send({
            data: newHabit,
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

async function removeHabit(res, id) {
    try {
        await query("DELETE FROM habits WHERE habits.id = ?", [id]);
        return res.send({
            data: "Removed successfully.",
            success: true,
            error: null,
        });
    } catch (error) {
        return res.send({
            data: null,
            success: false,
            error: "Something went wrong, please try again later.",
        });
    }
}

async function markComplete(res, id) {
    try {
        await query(
            "UPDATE habits SET habits.completed = 1 WHERE habits.id = ?",
            [id]
        );
        return addArt(res, id);
    } catch (err) {
        console.log(err);
        return res.send({
            data: null,
            success: true,
            error: "Something went wrong, please try again later.",
        });
    }
}

async function getHabitsByUserId(res, userID) {
    try {
        const habits = await query(
            "SELECT * FROM habits WHERE habits.user_id = ?",
            [userID]
        );
        return res.send({
            data: habits,
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

module.exports = { addHabit, removeHabit, markComplete, getHabitsByUserId };
