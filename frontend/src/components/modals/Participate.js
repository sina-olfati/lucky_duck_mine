import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { participate } from "../../redux/reducer/pools.reducer";
import "./participate.scss";
import eth from "../../images/eth.png";

import { CUInput, CUButton } from "../common/common";

const CustomSelect = styled(Form.Select)`
  font-size: 17px;
  line-height: 17px;
  font-weight: 500;
  height: 100%;
  background: rgba(17, 18, 32, 0.1294117647);
  border-radius: 6px;
  padding-left: 10px;
  border: 1px solid transparent;
  color: #8c90b7;

  :focus {
    border: 1px solid #444972 !important;
    box-shadow: unset !important;
  }
  option {
    background: #2d3161 !important;
    color: #8c90b7;
  }
`;

const Participate = ({ id, show, handleClose, ticketValue }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState(0);
  const dispatch = useDispatch();
  console.log("error", error);

  const handleClick = () => {
    if (amount >= ticketValue && type != "") {
      const payload = {
        id: id,
        amount: amount,
        type: type,
        address: localStorage.getItem("address"),
      };
      setError(0);
      setType("");
      dispatch(participate(payload));
      handleClose();
    } else if (amount < ticketValue && type == "") {
      setError(3);
    } else if (amount < ticketValue) {
      setError(1);
    } else if (type == "") {
      setError(2);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdropClassName="blur-back"
      dialogClassName="register-pools"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Participate</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="moreInfo">
          <h6>The amount you enter must be greater than the ticket value: </h6>
          <h6 className="text-white">$ {ticketValue}</h6>
        </div>
        <CUInput
          label="Enter your amount "
          id="id_walletaddress"
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <p
          className={`error1 ${
            error == 1 || error == 3 ? "hasError" : "noError"
          }`}
        >
          The amount you have entered is lower than the ticket value
        </p>
        <CustomSelect
          size="sm"
          onChange={(e) => setType(e.target.value)}
          className="custom-select"
        >
          <option value="">Choose your currency type</option>
          <option value="eth">
            {/* <span>ETH</span> */}
            ETH
          </option>
          <option value="dai">DAI</option>
          <option value="usdt">USDT</option>
          <option value="usdc">USDC</option>
        </CustomSelect>
        <p
          className={`error2 ${
            error == 2 || error == 3 ? "hasError" : "noError"
          }`}
        >
          Please select a currency
        </p>
        <div className="d-flex justify-content-between mt-2">
          <CUButton
            onClick={handleClose}
            style={{ width: "48%", justifyContent: "center", padding: "10px" }}
          >
            Cancel
          </CUButton>
          <CUButton
            onClick={handleClick}
            style={{ width: "48%", justifyContent: "center", padding: "10px" }}
          >
            Confirm
          </CUButton>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Participate;
