import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import coverImg from "../../assets/img/handshake.jpg";

const Promise = ({ promise, release }) => {
  const { id, title, message, from, to, depositAmount, status, blockTimestamp } =
    promise;

  const triggerRelease = () => {
    release(id);
  };

  var buttonClass = "d-none";
  if (status == "created") {
    buttonClass = "w-100 py-3";
  }

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{from}</span>
            <Badge bg="secondary" className="ms-auto">
              Status: {status}
            </Badge>
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={coverImg} alt={title} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1 ">{message}</Card.Text>
          <Card.Text className="text-secondary">
            <span>from: {from}</span><br/>
            <span>to: {to}</span>
          </Card.Text>
          <Card.Text className="flex-grow-1 ">Deposit Amount: {utils.format.formatNearAmount(depositAmount)} NEAR</Card.Text>
          <Button
            variant="outline-dark"
            onClick={triggerRelease}
            className={buttonClass}
          >
            Release Deposit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Promise.propTypes = {
  promise: PropTypes.instanceOf(Object).isRequired,
  release: PropTypes.func.isRequired,
};

export default Promise;
