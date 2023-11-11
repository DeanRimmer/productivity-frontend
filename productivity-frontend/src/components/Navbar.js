import React from "react";
import OrderModal from "./newOrder/OrderModal";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const returnHome = () => {
    history.push("/");
  };
  const location = useLocation();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((value) => !value);
  return (
    <div>
      {show ? <OrderModal toggleShow={toggleShow} /> : null}
      <button onClick={() => returnHome()} className="navBarLogo"></button>
      <div className="navbar">
        {window.location.pathname === "/" && (
          <button onClick={toggleShow} className="newOrderButton">
            New order
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
