import React, { useCallback } from "react";
import { connect } from "react-redux";
import { addCompleted } from "../redux/actions";
import { addArt } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";
import useAPI from "../hooks/useAPI";
import NewChallenge from "./NewChallenge";
import { Paper, Grid, Box } from "@mui/material";

const ChallengePage = ({ projects, addCompleted, addArt }) => {
  const { markComplete } = useAPI();
  let completedProjects = projects.filter((val) => val.completed === 1);
  let incompleteProjects = projects.filter((val) => val.completed === 0);

  const markCompleted = useCallback(async (project) => {
    const res = await markComplete(project);
    if (!res.data.success) {
      console.log(res.data.error);
    } else {
      addCompleted(project);
      addArt(res.data.data);
    }
  }, []);
  return (
    <Grid container rowSpacing={2} columnSpacing={2} className="projectLayout">
      <Grid item xs={12}>
        <NewChallenge />
      </Grid>
      <Grid item xs={12} md={6}>
        <h2>Incomplete Projects:</h2>
        <Box sx={{ height: 475, overflowY: "scroll" }}>
          {incompleteProjects.map((val) => (
            <ChallengeDisplay
              key={val.id}
              project={val}
              markCompleted={markCompleted}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <h2>Completed Projects:</h2>
          <Box sx={{ height: 475, overflowY: "scroll" }}>
            {completedProjects.map((val) => (
              <ChallengeDisplay key={val.id} project={val} />
            ))}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.challenge.projects,
  };
};
const mapDispatchToProps = {
  addCompleted,
  addArt,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
