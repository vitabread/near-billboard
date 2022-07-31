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
  createPromise,
} from "../../utils/nearbillboard";

const Promises = () => {
  const [promises, setPromises] = useState([]);
  const [loading, setLoading] = useState(false);

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
    toast(<NotificationError text="Failed to release deposit. You are not the promise recevier." />);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getPromises();
}, []);

return (
  <>
    {!loading ? (
      <>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fs-4 fw-bold mb-0">Near Billboard - Make Promises with Smart Contract</h1>
          <AddPromise save={addPromise} />
        </div>
        <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
          {promises.map((_promise) => (
            <Promise
              promise={{
                ..._promise,
              }}
              release={release}
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
