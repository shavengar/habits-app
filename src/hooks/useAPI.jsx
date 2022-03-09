import React, { useCallback } from "react";
import { post } from "../../server/routes/auth.routes";
const axios = require("axios");

export default function useAPI() {
    const makeAPICall = useCallback(async (url, config) => {
        try {
            const res = await axios.get(url, config);
            return res;
        } catch (err) {
            console.log(err);
            return {
                data: null,
                success: false,
                error: " Something went wrong.",
            };
        }
    }, []);

    const login = useCallback(
        async (username, password) => {
            return await makeAPICall("api/users/login", {
                method: "POST",
                body: res.data,
                headers: res.headers["content-type"],
                // or would this just be res.config?
            });
        },
        [makeAPICall]
    );

    const signup = useCallback(
        async (username, password) => {
            return await makeAPICall("api/users/signup", res.config);
        },
        [makeAPICall]
    );

    const addHabit = useCallback(
        async (habit) => {
            return await makeAPICall("api/habits/add", res.config);
        },
        [makeAPICall]
    );

    const removeHabit = useCallback(
        async (id) => {
            return await makeAPICall(`api/habits/remove/${id}`, res.config);
        },
        [makeAPICall]
    );

    const markComplete = useCallback(
        async (id) => {
            return await makeAPICall(`api/habits/complete/${id}`, res.config);
        },
        [makeAPICall]
    );

    const getHabitsByUserId = useCallback(
        async (user_id) => {
            return await makeAPICall(`api/habits/${user_id}`, res.config);
        },
        [makeAPICall]
    );

    const removeArt = useCallback(
        async (id) => {
            return await makeAPICall(`api/art/${id}`, res.config);
        },
        [makeAPICall]
    );

    const getArtByHabitId = useCallback(
        async (habit_id) => {
            return await makeAPICall(`api/art/${habit_id}`, res.config);
        },
        [makeAPICall]
    );

    return {
        login,
        signup,
        addHabit,
        removeHabit,
        markComplete,
        getHabitsByUserId,
        removeArt,
        getArtByHabitId,
    };
}
