import React from "react";
import Divider from "@mui/material/Divider";

const ChallengeDisplay = ({ project, markCompleted }) => {
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
              markCompleted(project.id);
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
              markCompleted(project.id);
            }}
          />
        </div>
      )}
      <Divider />
    </div>
  );
};

export default ChallengeDisplay;
