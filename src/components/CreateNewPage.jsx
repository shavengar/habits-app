import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { addProject } from "../redux/actions";
import { connect } from "react-redux";

const CreateNewPage = ({ addProject, projects }) => {
    const titleInput = useRef(null);
    const [projectDate, setProjectDate] = useState(new Date());
    const [nextID, setNextID] = useState(0);

    const createNew = () => {
        let project = {
            title: titleInput.current.value,
            dueDate: format(projectDate, "EEEEEE, MM/dd/yyyy"),
            id: nextID,
            completed: false,
        };
        setNextID((nextID) => nextID + 1);
        addProject(project);
    };

    return (
        <div>
            <h3>New Project:</h3>
            <label htmlFor="projectLabel">Project:</label>
            <br />
            <input id="projectLabel" type="text" ref={titleInput} />
            <br />
            <label>Due Date:</label>
            <DatePicker
                selected={projectDate}
                onChange={(date) => setProjectDate(date)}
            />
            <br />
            <button
                onClick={() => {
                    createNew();
                    setProjectDate(new Date());
                    titleInput.current.value = "";
                    console.log(projects);
                }}
            >
                Create
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { projects: state.challenge.projects };
};
const mapDispatchToProps = { addProject };

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPage);
