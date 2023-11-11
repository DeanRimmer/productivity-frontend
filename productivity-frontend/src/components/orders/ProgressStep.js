import React, { useState, useEffect } from "react";

export const ProgressStep = ({ status, colour }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    const ImageSwitch = () => {
      switch (status) {
        case "APPROVED":
          setImage("thumb_up");
          break;
        case "CREATED":
          setImage("add_circle_outline");
          break;
        case "DENIED":
          setImage("do_not_disturb_on");
          break;
        case "CANCELLED":
          setImage("close");
          break;
        case "COLLECTION":
          setImage("apartment");
          break;
        case "DESPATCHED":
          setImage("local_shipping");
          break;
        case "COMPLETED":
          setImage("done");
          break;
      }
    };
    ImageSwitch();
  }, []);
  return (
    <div className="step">
      <div className="bullet">
        <React.Fragment>
          <span className={colour}>
            <span className="material-icons-outlined">{image}</span>
            <p>{status}</p>
          </span>
        </React.Fragment>
      </div>
    </div>
  );
};
