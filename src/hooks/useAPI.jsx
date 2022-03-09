import React, { useCallback } from "react";
const axios = require("axios");

export default function useAPI() {
    const makeAPICall = useCallback(async (config) => {
        try {
            const res = await axios(config);
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
            return await makeAPICall({
                url: "api/users/login",
                method: "post",
                data: { username, password },
            });
        },
        [makeAPICall]
    );

    const signup = useCallback(
        async (username, password) => {
            return await makeAPICall({
                url: "api/users/signup",
                method: "put",
                data: { username, password },
            });
        },
        [makeAPICall]
    );

    const addHabit = useCallback(
        async (habit) => {
            return await makeAPICall({
                url: "api/habits/add",
                method: "put",
                data: habit,
            });
        },
        [makeAPICall]
    );

    const removeHabit = useCallback(
        async (id) => {
            return await makeAPICall({
                url: `api/habits/remove/${id}`,
                method: "delete",
                data: { id },
            });
        },
        [makeAPICall]
    );

    const markComplete = useCallback(
        async (id) => {
            return await makeAPICall({
                url: `api/habits/complete/${id}`,
                method: "patch",
                data: { id },
            });
        },
        [makeAPICall]
    );

    const getHabitsByUserId = useCallback(
        async (user_id) => {
            return await makeAPICall({
                url: `api/habits/${user_id}`,
                method: "get",
                data: { user_id },
            });
        },
        [makeAPICall]
    );

    const deleteArt = useCallback(
        async (art_id, user_id) => {
            return await makeAPICall({
                url: `api/art/${art_id}/${user_id}`,
                method: "delete",
            });
        },
        [makeAPICall]
    );

    const getArtByHabitId = useCallback(
        async (habit_id) => {
            return await makeAPICall({
                url: `api/art/${habit_id}`,
                method: "get",
                data: { habit_id },
            });
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
        deleteArt,
        getArtByHabitId,
    };
}
