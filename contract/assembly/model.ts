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
    dueBlockIndex: u64;

    public static fromPayload(payload: Promise): Promise {

        const promise = new Promise();
        promise.id = payload.id;
        promise.title = payload.title;
        promise.message = payload.message;
        promise.from = context.sender;
        promise.to = payload.to;
        promise.depositAmount = context.attachedDeposit;
        promise.dueBlockIndex = payload.dueBlockIndex;
        promise.status = "created";

        return promise;
    }

    public isOverdue(): boolean {
        return (context.blockIndex >= this.dueBlockIndex);
    }

    public isStatusCreated(): boolean {
        return (this.status == "created");
    }

    public markStatusReleased(): void {
        this.status = "released";
    }

    public markStatusRescinded(): void {
        this.status = "rescinded";
    }

    public markStatusTransferred(): void {
        this.status = "transferred";
    }
}

export const listedPromises = new PersistentUnorderedMap<string, Promise>("LISTED_PROMISES");
