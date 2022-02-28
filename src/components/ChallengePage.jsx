import React from "react";
import { connect } from "react-redux";
import { completeProject } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";

const ChallengePage = ({ projects, completeProject }) => {
    const markCompleted = (id) => {
        completeProject(id);
    };
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
    return { projects: state.challenge.projects };
};
const mapDispatchToProps = {
    completeProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
