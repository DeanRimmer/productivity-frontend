import React, { useState, useEffect } from "react";
import { ProgressStep } from "./ProgressStep";

export const ProgressBar = ({ status, addressOption }) => {
  const addressFromStatus = addressOption;
  const progressBarList =
    addressFromStatus === "Collect From Sunderland Office"
      ? { CREATED: false, APPROVED: false, COLLECTION: false, COMPLETED: false }
      : {
          CREATED: false,
          APPROVED: false,
          DESPATCHED: false,
          COMPLETED: false,
        };
  const [statusList, setStatusList] = useState(progressBarList);
  const [stepList, setStepList] = useState([]);

  useEffect(() => {
    const changeBarColour = async () => {
      let steps = [];
      let active = false;
      Object.keys(statusList).map((statusListItem) => {
        if (statusListItem === status)
          setStatusList({ [statusListItem]: true });
      });
      Object.keys(statusList).map((statusListItem) => {
        if (statusListItem !== status && active === false) {
          steps.push(
            <ProgressStep status={statusListItem} colour={"DARKGREEN"} />
          );
        } else if (statusListItem === status) {
          steps.push(<ProgressStep status={statusListItem} colour={"GREEN"} />);
          active = true;
        }
        if (statusListItem !== status && active === true) {
          steps.push(<ProgressStep status={statusListItem} colour={"GREY"} />);
        }
      });
      setStepList(steps);
    };
    changeBarColour();
  }, []);

  return (
    <div className="progressBar">
      {(status === "DENIED" || status === "CANCELLED") && (
        <ProgressStep status={status} colour={"RED"} />
      )}
      {status !== "DENIED" && status !== "CANCELLED" && (
        <React.Fragment>{stepList}</React.Fragment>
      )}
    </div>
  );
};

export default ProgressBar;
