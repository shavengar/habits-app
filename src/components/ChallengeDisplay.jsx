import React from "react";

const ChallengeDisplay = ({ project, markCompleted }) => {
    return (
        <div className="projects">
            <div
                className={
                    project.completed ? "completeProject" : "incompleteProject"
                }
            >
                <h3>{project.title}</h3>
                <p>{project.due_date}</p>
                <label>Completed:</label>
                <input
                    type="checkbox"
                    onChange={() => {
                        markCompleted(project.id);
                    }}
                />
            </div>
        </div>
    );
};

export default ChallengeDisplay;
