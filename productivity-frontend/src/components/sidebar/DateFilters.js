import React, { useState, useEffect } from "react";

const DateFilters = ({ updateDateFilters }) => {
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState([value]);
  };
  const handleChangeDate = (evt) => {
    const value = evt.target.value;
    setDateState([value]);
  };
  const [state, setState] = useState([]);
  const [dateState, setDateState] = useState([]);

  useEffect(() => {
    const twoDates = state.concat(dateState);
    updateDateFilters(twoDates);
  }, [state, dateState]);

  return (
    <form className="dateFilter">
      From:
      <input
        className="addressInput"
        type="date"
        onChange={handleChange}
        label="date1"
        name="date1"
        value={state}
      ></input>
      <br></br>
      To:
      <input
        className="addressInput"
        type="date"
        onChange={handleChangeDate}
        label="date2"
        name="date2"
        value={dateState}
      ></input>
    </form>
  );
};
export default DateFilters;
