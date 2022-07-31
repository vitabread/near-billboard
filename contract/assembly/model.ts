import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
export class Promise {
    id: string;
    title: string;
    message: string;
    from: string;
    to: string;
    depositAmount: u128;
    status: string;
    blockTimestamp: u64;

    public static fromPayload(payload: Promise): Promise {
        const promise = new Promise();
        promise.id = payload.id;
        promise.title = payload.title;
        promise.message = payload.message;
        promise.from = context.sender;
        promise.to = payload.to;
        promise.depositAmount = context.attachedDeposit;
        promise.status = "created";
        promise.blockTimestamp = context.blockTimestamp;

        return promise;
    }

}

export const listedPromises = new PersistentUnorderedMap<string, Promise>("LISTED_PROMISES");
