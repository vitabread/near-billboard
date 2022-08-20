import { Promise, listedPromises } from './model';
import { ContractPromiseBatch, context, u128 } from 'near-sdk-as';

const contractName = "nearbillboard.brandonleong.testnet";

// return current block index
export function getCurrentBlockIndex(): u64 {
    return context.blockIndex;
}

// check if the promise is overdue, the promise is overdue if current block index >= dueBlockIndex
export function isOverdue(promiseId: string): boolean {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("Promise not found.");
    }
    return promise.isOverdue();
}

// return a promise with the id
export function getPromise(id: string): Promise | null {
    return listedPromises.get(id);
}

// return the full promise list
export function getPromises(): Promise[] {
    return listedPromises.values();
}

// create a promise with deposit
export function createPromise(promise: Promise): void {
    let storedPromise = listedPromises.get(promise.id);

    if (storedPromise !== null) {
        throw new Error(`a promise with ${promise.id} already exists`);
    }

    listedPromises.set(promise.id, Promise.fromPayload(promise));
    ContractPromiseBatch.create(contractName).transfer(context.attachedDeposit);
}

// release the deposit if the sender == promise.to and marked the status as released
export function releaseDeposit(promiseId: string): void {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("Promise not found.");
    }
    if (!promise.isStatusCreated()) {
        throw new Error("Deposit cannot be released.");
    }
    if (promise.to != context.sender) {
        throw new Error("You are not authorized to release the deposit.");
    }

    ContractPromiseBatch.create(promise.from).transfer(promise.depositAmount);
    promise.markStatusReleased();
    listedPromises.set(promise.id, promise);
}

// rescind the promise if the sender is the promise.from and the promise is not yet overdue
export function rescindPromise(promiseId: string): void {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("Promise not found.");
    }
    if (!promise.isStatusCreated()) {
        throw new Error("Promise cannot be rescinded.");
    }
    if (promise.from != context.sender) {
        throw new Error("You are not authorized to rescind the promise.");
    }
    if (promise.isOverdue()) {
        throw new Error("The promise is overdue.");
    }

    ContractPromiseBatch.create(promise.from).transfer(u128.div(promise.depositAmount, u128.from(2)));
    promise.markStatusRescinded();
    listedPromises.set(promise.id, promise);
}

// transfer deposit to the receiver if the promise is overdue
export function transferDeposit(promiseId: string): void {
    const promise = getPromise(promiseId);
    if (promise == null) {
        throw new Error("Promise not found.");
    }
    if (!promise.isStatusCreated()) {
        throw new Error("Deposit cannot be transferred.");
    }
    if (promise.to != context.sender) {
        throw new Error("You are not authorized to transfer the deposit.");
    }
    if (!promise.isOverdue()) {
        throw new Error("The promise not yet overdued.");
    }
    ContractPromiseBatch.create(promise.to).transfer(promise.depositAmount);
    promise.markStatusTransferred();
    listedPromises.set(promise.id, promise);
}

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
