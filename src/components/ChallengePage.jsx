import React from "react";
import { connect } from "react-redux";
import { completeProject, removeProject } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";

const ChallengePage = ({ projects, removeProject, completeProject }) => {
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
                    removeProject={removeProject}
                    completeProject={completeProject}
                    markCompleted={markCompleted}
                    projects={projects}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { projects: state.challenge.projects };
};
const mapDispatchToProps = {
    removeProject,
    completeProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
