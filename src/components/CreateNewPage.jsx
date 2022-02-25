import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateNewPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div>
            <h3>Create a new challenge:</h3>
            <label htmlFor="habitLabel">Habit:</label>
            <input id="habitLabel" type="text" />
            <br />
            <label htmlFor="dateRange">Length of habit:</label>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>
    );
};

export default CreateNewPage;
