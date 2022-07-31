import { Promise, listedPromises } from './model';
import { ContractPromiseBatch, context } from 'near-sdk-as';

const contractName = "nearbillboard.brandonleong.testnet";

export function createPromise(promise: Promise): void {
    let storedPromise = listedPromises.get(promise.id);

    if (storedPromise !== null) {
        throw new Error(`a promise with ${promise.id} already exists`);
    }

    listedPromises.set(promise.id, Promise.fromPayload(promise));
    ContractPromiseBatch.create(contractName).transfer(context.attachedDeposit);
}

export function getPromise(id: string): Promise | null {
    return listedPromises.get(id);
}

export function getPromises(): Promise[] {
    return listedPromises.values();
}

export function releaseDeposit(promiseId: string): void {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("Promise not found.");
    }
    if (promise.to != context.sender) {
        throw new Error("You are not authorized to release the deposit.");
    }
    if (promise.status != "created") {
        throw new Error("Deposit cannot be released.");
    }
    ContractPromiseBatch.create(promise.from).transfer(promise.depositAmount);
    promise.status = "released";
    listedPromises.set(promise.id, promise);
}

/* for future development
export function transferDeposit(promiseId: string): void {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("promise not found");
    }
    if (promise.status != "created") {
        throw new Error("Deposit cannot be released.");
    }
    ContractPromiseBatch.create(promise.to).transfer(promise.depositAmount);
    promise.status = "transferred";
    listedPromises.set(promise.id, promise);
}
*/

/*
export function deletePromise(id: string): void {
    listedPromises.delete(id);
}
*/

/*
export function deleteAll(): void{
    listedPromises.clear();
}
*/

/* for future development
export function getCurrentBlockTimestampInSec(): u64 {
    return context.blockTimestamp / 1000000000;
}
*/
