import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addProject } from "../redux/actions";
import { connect } from "react-redux";

const CreateNewPage = ({ addProject, projects }) => {
    const titleInput = useRef(null);
    const [title, setTitle] = useState("");
    const [projectDate, setProjectDate] = useState(new Date());
    const [nextID, setNextID] = useState(0);

    const createNew = (props) => {
        let project = {
            projectName: title,
            dueDate: projectDate,
            id: nextID,
            completed: false,
        };
        return (
            setTitle(titleInput.current.value),
            setNextID((nextID) => nextID + 1),
            addProject(project)
        );
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
                    console.log(projects);
                }}
            >
                Create
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        projects: state.challenge.projects,
    };
};
const mapDispatchToProps = { addProject };

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPage);
