import React, { useState, useEffect } from "react";

const baseURL =
    "https://www.rijksmuseum.nl/api/en/collection?key=L93w4I9H&imgonly=true&ps=100&toppieces=true";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            setData(null);
            setError(null);
            let randomIndex = math.Floor(math.Random() * (100 - 1) + 1);
            try {
                const response = await fetch(baseURL);
                const json = await response.json();
                const art = json.artObjects.at(randomIndex).map((val) => ({
                    id: val.id,
                    title: val.longTitle,
                    img: val.webImage.url,
                }));
                setData(art);
            } catch (err) {
                setError(err);
            }
        }
    }, [completedProjects]);
    return { data, error };
};

export default useFetch;
