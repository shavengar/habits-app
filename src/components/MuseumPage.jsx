import React, { useCallback } from "react";
import { connect } from "react-redux";
import { removeArt } from "../redux/actions";
import useAPI from "../hooks/useAPI";
import ArtDisplay from "./ArtDisplay";

const MuseumPage = ({ user, artCollection }) => {
    const { deleteArt } = useAPI();
    const remove = useCallback(
        async (art_id) => {
            const res = await deleteArt(art_id, user.id);
            if (!res.data.success) {
                console.log(res.data.error);
            } else {
                removeArt(art_id);
            }
        },
        [removeArt, deleteArt]
    );

    return (
        <div>
            <h2>Art Collection:</h2>
            {artCollection.map((val) => (
                <ArtDisplay key={val.id} art={val} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { artCollection: state.art.artCollection, user: state.user };
};

const mapDispatchToProps = {
    removeArt,
};

export default connect(mapStateToProps, mapDispatchToProps)(MuseumPage);
