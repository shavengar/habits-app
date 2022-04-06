import React, { useCallback } from "react";
import { connect } from "react-redux";
import { addCompleted } from "../redux/actions";
import { addArt } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";
import useAPI from "../hooks/useAPI";
import NewChallenge from "./NewChallenge";
import Box from "@mui/material/Box";

const ChallengePage = ({
  projects,
  addCompleted,
  addArt,
  completedProjects,
}) => {
  const { markComplete } = useAPI();
  const markCompleted = useCallback(async (project) => {
    const res = await markComplete(project);
    if (!res.data.success) {
      console.log(res.data.error);
    } else {
      addCompleted(project);
      addArt(res.data.data);
      console.log(completedProjects);
    }
  }, []);
  return (
    <div className="content">
      <NewChallenge />
      <h2>Challenges:</h2>
      <Box sx={{ height: 475, overflowY: "scroll" }}>
        {projects.map((val) => (
          <ChallengeDisplay
            key={val.id}
            project={val}
            markCompleted={markCompleted}
          />
        ))}
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.challenge.projects,
    completedProjects: state.challenge.completedProjects,
  };
};
const mapDispatchToProps = {
  addCompleted,
  addArt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
