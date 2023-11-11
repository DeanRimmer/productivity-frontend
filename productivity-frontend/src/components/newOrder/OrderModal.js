import React, { useContext } from "react";
import { orderRepository } from "../../repositories/orderRepository";
import { useState, useEffect } from "react";
import { OrderItemComponent } from "./OrderItemComponent";

const OrderModal = ({ toggleShow }) => {
  const [showAddress, setShowAddress] = useState(false);
  const [productsSelected, setProductsSelected] = useState([]);
  const [addressChoice, setAddressChoice] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDuplicateOrder, setIsDuplicateOrder] = useState(false);
  const [userProducts, setUserProducts] = useState([]);
  const [duplicateProducts, setDuplicateProducts] = useState([]);
  const [showAddressOnFile, setShowAddressOnFile] = useState(false);

  useEffect(() => {
    const loadUserProducts = async () => {
      const loadedUserProducts = await orderRepository.userProducts();
      setUserProducts(loadedUserProducts);
    };
    loadUserProducts();
  }, []);

  const toggleProduct = (isChecked, value) => {
    const products = [...productsSelected];
    const duplicateProduct = [...duplicateProducts];
    if (isChecked) {
      products.push(value);
      if (userProductsMap.get(value) === true) {
        duplicateProduct.push(value);
        setIsDuplicateOrder(true);
      }
    } else {
      const productsIndex = products.indexOf(value);
      products.splice(productsIndex, 1);
      if (userProductsMap.get(value) === true) {
        const dupProductsIndex = duplicateProduct.indexOf(value);
        duplicateProduct.splice(dupProductsIndex, 1);
      }
      if (duplicateProduct.length === 0) {
        setIsDuplicateOrder(false);
      }
    }
    setProductsSelected(products);
    setDuplicateProducts(duplicateProduct);
  };

  const toggleConfirm = () => {
    setShowConfirm((value) => !value);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const [state, setState] = React.useState({
    addressline1: "",
    addressline2: "",
    postcode: "",
    duplicateReason: "",
  });

  const addressField = (event) => {
    const target = event.target;
    var value = target.value;
    if (value === "Deliver To Alternative / Client Address") {
      setShowAddress(true);
      setShowAddressOnFile(false);
    } else if (value === "Use Address On File") {
      setShowAddress(false);
      setShowAddressOnFile(true);
    } else {
      setShowAddress(false);
      setShowAddressOnFile(false);
    }
    setAddressChoice(value);
  };

  const duplicateProductsList = () => {
    return (
      <ul>
        {duplicateProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    );
  };

  const userProductsMap = new Map(Object.entries(userProducts));

  const loadOrders = async () => {
    if (productsSelected.length !== 0) {
      if (addressChoice.length !== 0) {
        orderRepository
          .createOrder({
            product: productsSelected,
            addressOption: addressChoice,
            address: state,
            duplicateReason: state.duplicateReason,
          })
          .then(toggleShow());
      } else {
        alert("please select a delivery option");
      }
    } else {
      alert("please select an item");
    }
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="backdrop" onClick={toggleShow}></div>
      <div className="modal">
        <header className="header">
          <h2>Create New Request</h2>
        </header>
        <div className="content">
          <div className="productContainer">
            <table className="productTable">
              <tbody>
                <tr>
                  <th>
                    <OrderItemComponent
                      productName="Laptop"
                      toggleProduct={toggleProduct}
                      name="laptopImage"
                    />
                  </th>
                  <th>
                    <OrderItemComponent
                      productName="Monitor"
                      toggleProduct={toggleProduct}
                      name="monitorImage"
                    />
                  </th>
                  <th>
                    <OrderItemComponent
                      productName="Headset"
                      toggleProduct={toggleProduct}
                      name="headsetImage"
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <OrderItemComponent
                      productName="Mouse and Keyboard"
                      toggleProduct={toggleProduct}
                      name="keyboardImage"
                    />
                  </th>
                  <th>
                    <OrderItemComponent
                      productName="Messenger Bag"
                      toggleProduct={toggleProduct}
                      name="messengerBagImage"
                    />
                  </th>
                  <th>
                    <OrderItemComponent
                      productName="Rucksack"
                      toggleProduct={toggleProduct}
                      name="messengerBagImage2"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="addressCheckbox">
              <h3>Delivery Options:</h3>
              <span className="productName">
                <input
                  type="radio"
                  name="address"
                  id="addressOnFile"
                  onChange={addressField}
                  value="Use Address On File"
                />
                <label htmlFor="addressOnFile">Use Address On File</label>
                <br></br>
                <input
                  type="radio"
                  name="address"
                  id="collectFromOffice"
                  onChange={addressField}
                  value="Collect From Sunderland Office"
                />
                <label htmlFor="collectFromOffice">
                  Collect From Sunderland Office
                </label>
                <br></br>
                <input
                  type="radio"
                  name="address"
                  id="alternativeAddress"
                  onChange={addressField}
                  value="Deliver To Alternative / Client Address"
                />
                <label htmlFor="alternativeAddress">
                  Deliver To Alternative / Client Address
                </label>
              </span>
            </div>
            {showAddress ? (
              <div className="addressBox">
                <form>
                  <div>
                    <label className="addressLabel">
                      Address Line 1:
                      <input
                        className="addressInput"
                        type="text"
                        onChange={handleChange}
                        label="addressLine1"
                        name="addressline1"
                        value={state.addressline1}
                      />
                    </label>
                  </div>
                  <br></br>
                  <div>
                    <label className="addressLabel">
                      Address Line 2:
                      <input
                        className="addressInput"
                        type="text"
                        onChange={handleChange}
                        name="addressline2"
                        value={state.addressline2}
                      />
                    </label>
                  </div>
                  <br></br>
                  <div>
                    <label className="addressLabel">
                      Postcode:
                      <input
                        className="addressInput"
                        type="text"
                        onChange={handleChange}
                        name="postcode"
                        value={state.postcode}
                      />
                    </label>
                  </div>
                </form>
              </div>
            ) : null}
            {showAddressOnFile && (
              <p>
                If unsure of the address on file please contact{" "}
                <a href="mailto:UK_HR@saggezza.com">UK_HR@saggezza.com</a>
              </p>
            )}
          </div>
          <div className="disclaimerContainer">
            - The items listed for order are for use when working. A single
            monitor is offered to enable working from home and a laptop which
            will be used for work purposes in both home and your office
            location.
            <br></br>- Pictures of items listed above do not reflect the item
            which will be issued.
            <br></br>- Should you need support with obtaining other office
            equipment i.e. desk, chair, ergonomic items, we're happy to assist
            you with the cost of these purchases.
            <a
              href="https://sites.google.com/saggezza.com/1saggezzauk1/benefits-schemes/working-from-home-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here{" "}
            </a>{" "}
            to see the working from home scheme for guidance.
            <br></br>- We also offer a Tech Scheme for any equipment or gadgets
            for personal use.
            <a
              href="https://sites.google.com/saggezza.com/1saggezzauk1/benefits-schemes/tech-scheme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>{" "}
            to get further informtion.
            <br></br>
            <input
              type="checkbox"
              id="confirmBox"
              onChange={toggleConfirm}
              value="I Agree"
            />
            <label for="confirmBox">I agree</label>
          </div>
          {isDuplicateOrder ? (
            <div className="orderDuplicateText">
              <br></br>
              You already have the following products, please state why you need
              a duplicate.
              <br></br>
              {duplicateProductsList()}
              <input
                className="duplicateReasonInput"
                type="text"
                onChange={handleChange}
                name="duplicateReason"
                value={state.duplicateReason}
              ></input>
            </div>
          ) : null}
        </div>
        <footer className="actions">
          <button onClick={toggleShow} className="close modalButton">
            Close
          </button>
          {showConfirm ? (
            <button onClick={loadOrders} className="confirm modalButton">
              Confirm
            </button>
          ) : null}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default OrderModal;
