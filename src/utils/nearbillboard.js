import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export async function createPromise(promise) {
  promise.id = uuid4();
  promise.depositAmount = parseNearAmount(promise.depositAmount + "");
  await window.contract.createPromise({ promise }, GAS, promise.depositAmount);
}

export function getCurrentBlockIndex() {
  return window.contract.getCurrentBlockIndex();
}

export function isOverdue({id}) {
  return window.contract.isOverdue({promiseId: id});
}

export function getPromises() {
  return window.contract.getPromises();
}

export function releaseDeposit({id}) {
  return window.contract.releaseDeposit({promiseId: id}, GAS);
}

export function transferDeposit({id}) {
  return window.contract.transferDeposit({promiseId: id}, GAS);
}

export function rescindPromise({id}) {
  return window.contract.rescindPromise({promiseId: id}, GAS);
}
