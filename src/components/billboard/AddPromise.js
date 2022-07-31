import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddPromise = ({ save }) => {
  const [title, setTitle] = useState("");
  //const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const [depositAmount, setDepositAmount] = useState(0);
  const isFormFilled = () => title && message && to && depositAmount;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Promise Information</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputTitle"
              label="Promise Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter Title of The Promise"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputMessage"
              label="Content"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="message"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputTo"
              label="To"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="To"
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDepositAmount"
              label="Deposit Amount"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Deposit Amount"
                onChange={(e) => {
                  setDepositAmount(e.target.value);
                }}
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                title,
                message,
                to,
                depositAmount,
              });
              handleClose();
            }}
          >
            Make a Promise
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddPromise.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddPromise;
