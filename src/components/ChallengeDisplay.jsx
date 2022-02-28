import React from "react";

const ChallengeDisplay = ({
    project,
    projects,
    markCompleted,
    removeProject,
    completeProject,
}) => {
    return (
        <div className="projects">
            <div
                className={
                    project.completed ? "completeProject" : "incompleteProject"
                }
            >
                <h3>{project.title}</h3>
                <p>{project.dueDate}</p>
                <label>Completed:</label>
                <input
                    type="checkbox"
                    onChange={() => {
                        markCompleted(project.id);
                        console.log(projects);
                    }}
                />
            </div>
        </div>
    );
};

export default ChallengeDisplay;
