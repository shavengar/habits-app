const query = require("../config/mysql.config");
const axios = require("axios");

async function addArt(res, habit_id) {
    try {
        const baseURL =
            "https://www.rijksmuseum.nl/api/en/collection?key=L93w4I9H&imgonly=true&ps=100&toppieces=true";
        let randomIndex = Math.floor(Math.random() * (100 - 1) + 1);
        const response = await axios.get(baseURL);
        const randArt = response.data.artObjects[randomIndex];
        const art = {
            art_id: randArt.id,
            title: randArt.title,
            long_title: randArt.longTitle,
            url: randArt.webImage.url,
            habit_id,
        };
        if (!art) {
            return res.send({
                data: null,
                success: false,
                error: "Unable to connect to Rijk Museum.",
            });
        }
        let { insertId } = await query("INSERT INTO art SET ?", [art]);
        return res.send({
            data: { ...art, id: insertId },
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

async function removeArt(res, id) {
    try {
        await query("DELETE FROM art WHERE id = ?", [id]);
        return res.send({
            data: "Successfully removed.",
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

async function getArtByHabitId(res, userHabits) {
    console.log(userHabits);
    try {
        const art = await query("SELECT * FROM art WHERE art.habit_id IN (?)", [
            userHabits,
        ]);
        return res.send({
            data: art,
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

module.exports = { addArt, removeArt, getArtByHabitId };
