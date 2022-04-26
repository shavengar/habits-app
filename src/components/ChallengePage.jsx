import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { addCompleted, addArt, removeProject } from "../redux/actions";
import ChallengeDisplay from "./ChallengeDisplay";
import useAPI from "../hooks/useAPI";
import NewChallenge from "./NewChallenge";
import { Grid, Box } from "@mui/material";

const ChallengePage = ({
  projects,
  completedProjects,
  addCompleted,
  addArt,
  removeProject,
}) => {
  const { markComplete, removeHabit } = useAPI();
  let incompleteProjects = useMemo(
    () => projects.filter((val) => !val.completed),
    [projects]
  );

  const markCompleted = useCallback(
    async (project) => {
      const res = await markComplete(project);
      project.completed = 1;
      if (!res.data.success) {
        console.log(res.data.error);
      } else {
        addCompleted(project);
        addArt(res.data.data);
      }
    },
    [
      addCompleted,
      addArt,
      markComplete,
      incompleteProjects,
      completedProjects,
      projects,
    ]
  );
  const removeProj = useCallback(
    async (id) => {
      const res = await removeHabit(id);
      if (res.data.success) {
        removeProject(id);
      }
    },
    [removeHabit, removeProject, projects]
  );
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
              <ChallengeDisplay
                key={val.id}
                project={val}
                removeProject={removeProj}
              />
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
    completedProjects: state.challenge.completedProjects,
  };
};
const mapDispatchToProps = {
  addCompleted,
  addArt,
  removeProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
