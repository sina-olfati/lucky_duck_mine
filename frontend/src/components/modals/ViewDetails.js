import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { CUButton, CUSelect2 } from "../common/common";
import "./ViewDetails.scss";
import { CUInput, CUTextArea, CUSelect } from "../common/common";
import ImageCard from "../common/ImageCard";
import { register } from "../../redux/reducer/pools.reducer";

const CustomSelect = styled(Form.Select)`
  font-size: 17px;
  line-height: 17px;
  font-weight: 500;
  width: 150px;
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

const VeiwDetails = ({ show, handleClose, poolData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ticketValue, setTicketValue] = useState(0);
  const [drawDate, setDrawDate] = useState("");
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();

  const handleSave = () => {
    const inputData = {
      title,
      description,
      ticketValue: parseInt(ticketValue),
      drawDate: getCurrentDate(),
      status: parseInt(status),
      img: "/assets/image/cards/default.svg",
    };
    console.log(inputData);
    dispatch(register(inputData));
    setTitle("");
    setDescription("");
    setTicketValue(0);
    setStatus(0);
    handleClose();
  };

  const getCurrentDate = () => {
    const currentDate = new Date();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentMonth = months[currentDate.getMonth()]; // Get current month name from the months array
    const currentDay = currentDate.getDate(); // Get current day (1-31)
    const currentYear = currentDate.getFullYear(); // Get current year (e.g., 2023)

    const formattedDate = `${currentMonth} ${currentDay}, ${currentYear}`;

    return formattedDate;
  };

  return (
    <div className="register-pools">
      <Modal
        show={show}
        // show={true}
        onHide={handleClose}
        backdropClassName="blur-back"
        size="lg"
        dialogClassName="register-pools"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Pool Details</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={6} xs={12}>
                <CUInput
                  label="Title"
                  id="id_title"
                  type="text"
                  value={poolData.title}
                  // onChange={(e) => setTitle(e.target.value)}
                  readonly
                />
                <CUTextArea
                  label="Description"
                  id="textAreaExample"
                  rows={4}
                  value={poolData.description}
                  // onChange={(e) => setDescription(e.target.value)}
                  readonly
                />
                <CUInput
                  label="Ticket Value"
                  id="it_ticket"
                  type="number"
                  value={poolData.ticketValue}
                  // onChange={(e) => setTicketValue(e.target.value)}
                  readonly
                />
                <div id="select_status">
                  <CustomSelect
                    size="sm"
                    style = {{backgroundColor:"#2d3161", color:"white"}}
                    // onChange={(e) => setStatus(e.target.value)}
                    value = {poolData.status}
                    disabled
                  >
                    <option>Status</option>
                    <option value={0}>Published</option>
                    <option value={1}>Drafts</option>
                    <option value={2}>Closed</option>
                  </CustomSelect>
                </div>

                <div>
                  {/* <CUButton className="text-center mt-2 justify-content-center">
                    <span>
                      <Image id="icon" src="/assets\image\icons\upload.svg" />
                    </span>
                    <span style={{ margin: "10px" }}>Upload Image</span>
                  </CUButton> */}
                </div>

                {/* <div className="d-flex justify-content-between mt-2">
                  <CUButton
                    onClick={handleClose}
                    style={{
                      width: "48%",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    Cancel
                  </CUButton>
                  <CUButton
                    onClick={handleSave}
                    style={{
                      width: "48%",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    Save
                  </CUButton>
                </div> */}
              </Col>
              <Col sm={6} xs={12}>
                <div className="upload-card">
                  <div className="gallery d-flex justify-content-center">
                    <img
                      className={"d-block"}
                      src={"/assets/image/icons/gallery.svg"}
                    />
                  </div>
                  <div className="img-heading">
                    <h3>{poolData.title}</h3>
                    <h6>
                      {poolData.description}
                    </h6>
                    <div id="divider"></div>
                    <div className="justify-content-between d-flex" id="value">
                      <h6>Ticket Value</h6>
                      <h6 className="text-white">$ {Math.floor(poolData.ticketValue / 1000)} K</h6>
                    </div>
                    <div className="justify-content-between d-flex" id="value">
                      <h6>Draw Date</h6>
                      <h6 className="text-white">{poolData.drawDate}</h6>
                    </div>
                    <div className="justify-content-between d-flex" id="value">
                      <h6>Status</h6>
                      <h6 className="status">{poolData.status == 0 ? "Published" : poolData.status == 1 ? "Drafts" : "Closed"}</h6>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VeiwDetails;
