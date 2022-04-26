import React from "react";
import Divider from "@mui/material/Divider";

const ChallengeDisplay = ({ project, markCompleted, removeProject }) => {
  return (
    <div className="projects">
      {project.completed ? (
        <div className="complete">
          <h3>{project.title}</h3>
          <p>{project.due_date}</p>
          <label>Remove:</label>
          <input
            type="checkbox"
            onChange={() => {
              removeProject(project.id);
            }}
          />
        </div>
      ) : (
        <div className="incomplete">
          <h3>{project.title}</h3>
          <p>{project.due_date}</p>
          <label>Completed:</label>
          <input
            type="checkbox"
            onChange={() => {
              markCompleted(project);
            }}
          />
        </div>
      )}
      <Divider />
    </div>
  );
};

export default ChallengeDisplay;
