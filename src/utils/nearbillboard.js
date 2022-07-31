import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export async function createPromise(promise) {
  promise.id = uuid4();
  promise.depositAmount = parseNearAmount(promise.depositAmount + "");
  await window.contract.createPromise({ promise }, GAS, promise.depositAmount);
}

export function getPromises() {
  return window.contract.getPromises();
}

export function releaseDeposit({id}) {
  return window.contract.releaseDeposit({promiseId: id}, GAS);
}
