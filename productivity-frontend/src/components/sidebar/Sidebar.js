import React, { useContext } from "react";
import Collapsible from "../Collapsible";
import OrderStatusFilters from "./OrderStatusFilters";
import DateFilters from "./DateFilters";
import ProductFilters from "./ProductFilters";
import Button from "../buttons/Button";
import { useHistory } from "react-router-dom";
const Sidebar = ({
  updateStatusFilters,
  updateProductFilters,
  updateDateFilters,
}) => {
  const history = useHistory();
  const openAdminPanel = () => {
    history.push("/admin");
  };
  const clearFilters = () => {
    window.location.reload(false);
  };
  return (
    <div className="sidebar">
      <h3 className="filtersHeading">Filters</h3>
      <Collapsible label="Order status filters">
        <OrderStatusFilters updateStatusFilters={updateStatusFilters} />
      </Collapsible>
      <hr />
      <Collapsible label="Product filters">
        <ProductFilters updateProductFilters={updateProductFilters} />
      </Collapsible>
      <hr />
      <Collapsible label="Date filters">
        <DateFilters updateDateFilters={updateDateFilters} />
      </Collapsible>
      <hr />
      <Button
        label="Clear Filters"
        onClickFunction={() => clearFilters()}
        buttonClass="modalButton"
      />
      <hr />
    </div>
  );
};
export default Sidebar;
