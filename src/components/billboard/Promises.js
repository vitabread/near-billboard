import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddPromise from "./AddPromise";
import Promise from "./Promise";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
  getPromises as getPromiseList,
  releaseDeposit,
  transferDeposit,
  createPromise,
  rescindPromise,
  getCurrentBlockIndex
} from "../../utils/nearbillboard";

const Promises = () => {
  const [promises, setPromises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);

  const getCurrentBlockIdx = useCallback(async () => {
    try {
      setCurrentBlockIndex(await getCurrentBlockIndex());
    } catch (error) {
      console.log({ error });
    } finally {
    }
  });

  const getPromises = useCallback(async () => {
    try {
      setLoading(true);
      setPromises(await getPromiseList());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  const addPromise = async (data) => {
  try {
    setLoading(true);
    await createPromise(data).then((resp) => {
      getPromises();
    });
    toast(<NotificationSuccess text="Promise added successfully." />);
  } catch (error) {
    console.log({ error });
    toast(<NotificationError text="Failed to create a promise." />);
  } finally {
    setLoading(false);
  }
};

const release = async (id) => {
  try {
    await releaseDeposit({
      id
    }).then((resp) => getPromises());
    toast(<NotificationSuccess text="Release deposit successfully." />);
  } catch (error) {
    toast(<NotificationError text="Failed to release deposit." />);
  } finally {
    setLoading(false);
  }
};

const transfer = async (id) => {
  try {
    await transferDeposit({
      id
    }).then((resp) => getPromises());
    toast(<NotificationSuccess text="Transfer deposit successfully." />);
  } catch (error) {
    toast(<NotificationError text="Failed to transfer deposit." />);
  } finally {
    setLoading(false);
  }
};

const rescind = async (id) => {
  try {
    await rescindPromise({
      id
    }).then((resp) => getPromises());
    toast(<NotificationSuccess text="Rescind promise successfully." />);
  } catch (error) {
    toast(<NotificationError text="Failed to rescind promise." />);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getCurrentBlockIdx();
}, []);

useEffect(() => {
  getPromises();
}, []);

return (
  <>
    {!loading ? (
      <>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4 fw-bold mb-0">Near Billboard - Make Promises with Smart Contract / Block Index: {currentBlockIndex}</h1>
          <AddPromise save={addPromise} />
        </div>
        <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
          {promises.map((_promise) => (
            <Promise
              promise={{
                ..._promise,
              }}
              release={release}
              transfer={transfer}
              rescind={rescind}
            />
          ))}
        </Row>
      </>
    ) : (
      <Loader />
    )}
  </>
);
};

export default Promises;
