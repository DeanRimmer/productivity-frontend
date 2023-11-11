import React, { useState } from "react";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="collapsible">
        <a className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {props.label}
        </a>
        <div className={isOpen ? "filterParentOpen" : "filterParent"}>
          <div className="filterContent">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
