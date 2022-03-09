import React, { useCallback } from "react";
import { connect } from "react-redux";
import { completeProject } from "../redux/actions";
import { addArt } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";
import useAPI from "../hooks/useAPI";

const ChallengePage = ({ projects, completeProject, addArt }) => {
    const { markComplete } = useAPI();
    const markCompleted = useCallback(async (id) => {
        const res = await markComplete(id);
        if (!res.data.success) {
            console.log(res.data.error);
        } else {
            completeProject(res.data.data);
            addArt(res.data.data);
        }
    }, []);
    return (
        <div>
            <h2>Challenges:</h2>
            {projects.map((val) => (
                <ChallengeDisplay
                    key={val.id}
                    project={val}
                    markCompleted={markCompleted}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.challenge.projects,
    };
};
const mapDispatchToProps = {
    completeProject,
    addArt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
