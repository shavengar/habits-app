import React, { useState, useRef, useCallback } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { addProject } from "../redux/actions";
import { connect } from "react-redux";
import useAPI from "../hooks/useAPI";

const NewChallenge = ({ addProject, user, projects }) => {
  const { addHabit } = useAPI();
  const titleInput = useRef(null);
  const [projectDate, setProjectDate] = useState(new Date());

  const createNew = useCallback(async () => {
    let project = {
      title: titleInput.current.value,
      due_date: format(projectDate, "EEEEEE, MM/dd/yyyy"),
      completed: false,
    };
    const res = await addHabit({ ...project, user_id: user.id });
    if (res.data.success) {
      addProject(res.data.data);
    }
  }, [addProject, addHabit]);

  return (
    <div>
      <h2>New Project:</h2>
      <label htmlFor="projectLabel">Project:</label>
      <br />
      <input id="projectLabel" type="text" ref={titleInput} />
      <br />
      <br />
      <label>Deadline:</label>
      <DatePicker
        selected={projectDate}
        onChange={(date) => setProjectDate(date)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          createNew();
          setProjectDate(new Date());
          titleInput.current.value = "";
        }}
      >
        Create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, projects: state.challenge.projects };
};
const mapDispatchToProps = { addProject };

export default connect(mapStateToProps, mapDispatchToProps)(NewChallenge);
