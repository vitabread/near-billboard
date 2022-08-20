import React, {useEffect, useState, useCallback} from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import coverImg from "../../assets/img/handshake.jpg";
import {
  isOverdue
} from "../../utils/nearbillboard";

const Promise = ({ promise, release, rescind, transfer }) => {
  const account = window.walletConnection.account();

  const { id, title, message, from, to, depositAmount, status, dueBlockIndex } =
    promise;

  const [overdued, setOverdued] = useState(false);

  const getIsOverdued = useCallback(async (id) => {
    try {
      setOverdued(await isOverdue({id}));
    } catch (error) {
      console.log({ error });
    } finally {
    }
  });

  const triggerRelease = () => {
    release(id);
  };

  const triggerTransfer = () => {
    transfer(id);
  };

  const triggerRescind = () => {
    rescind(id);
  };

  let badgeClass = "";
  let statusText = "";
  let amountBarClass = "alert alert-info";
  let amountBarText = "";

  if (status === "rescinded") {
    badgeClass = "secondary";
    statusText = "Rescinded";
    amountBarText = "Refund Amount: " + Number(utils.format.formatNearAmount(depositAmount))/2 + " NEAR";
    amountBarText += " / " + "Forfeit Amount: " + Number(utils.format.formatNearAmount(depositAmount))/2 + " NEAR";
    amountBarText += " / " + "Transferred Amount: " + "-" + " NEAR";
  } else if (status === "created") {
    badgeClass = "success";
    statusText = "New";
    amountBarText = "Refund Amount: " + "-" + " NEAR";
    amountBarText += " / " + "Forfeit Amount: " + "-" + " NEAR";
    amountBarText += " / " + "Transferred Amount: " + "-" + " NEAR";
  } else if (status === "released") {
    badgeClass = "primary";
    statusText = "Completed";
    amountBarText = "Refund Amount: " + Number(utils.format.formatNearAmount(depositAmount)) + " NEAR";
    amountBarText += " / " + "Forfeit Amount: " + "-" + " NEAR";
    amountBarText += " / " + "Transferred Amount: " + "-" + " NEAR";
  } else if (status === "transferred") {
    badgeClass = "warning";
    statusText = "Transferred";
    amountBarText = "Refund Amount: " + "-" + " NEAR";
    amountBarText += " / " + "Forfeit Amount: " + "-" + " NEAR";
    amountBarText += " / " + "Transferred Amount: " + Number(utils.format.formatNearAmount(depositAmount)) + " NEAR";
  }

  let buttonClass = "d-none";
  if (status === "created" && promise.to === account.accountId) {
    buttonClass = "w-100 py-3";
  }

  let rescindButtonClass = "d-none";
  if (status === "created" && promise.from === account.accountId) {
    rescindButtonClass = "w-100 py-3";
  }

  let transferButtonClass = "d-none";
  if (status === "created" && promise.to === account.accountId) {
    transferButtonClass = "w-100 py-3";
  }

  useEffect(() => {
    getIsOverdued(id);
  }, []);

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{from}</span>
            <Badge bg={badgeClass} className="ms-auto">
              {statusText}
            </Badge>
          </Stack>
        </Card.Header>

        <Card.Body className="d-flex  flex-column text-center">
          <Card.Text className="text-secondary">
            <span>to: {to}</span>
          </Card.Text>
          <Card.Title>{title}</Card.Title>
          <div className=" ratio ratio-4x3">
            <img src={coverImg} alt={title} style={{ objectFit: "cover" }} />
          </div>
          <Card.Text className="flex-grow-1 ">{message}</Card.Text>
          <div class="alert alert-primary" role="alert">
            Deposit Amount: {utils.format.formatNearAmount(depositAmount)} NEAR
          </div>
          <div class={amountBarClass} role="alert">
            {amountBarText}
          </div>
          <div class="alert alert-warning" role="alert">
            Due Block Index: {dueBlockIndex}
          </div>
          <Button
            variant="outline-dark"
            onClick={triggerRelease}
            className={buttonClass}
          >
            Release Deposit
          </Button>
          <h1 />
          <Button
            variant="outline-warning"
            onClick={triggerTransfer}
            className={overdued ? transferButtonClass : "d-none"}
          >
            Transfer Deposit to My Account
          </Button>
          <Button
              variant="outline-danger"
              onClick={triggerRescind}
              className={overdued ? "d-none" : rescindButtonClass}
          >
            Rescind Promise
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Promise.propTypes = {
  promise: PropTypes.instanceOf(Object).isRequired,
  release: PropTypes.func.isRequired,
  rescind: PropTypes.func.isRequired,
  transfer: PropTypes.func.isRequired,
};

export default Promise;
