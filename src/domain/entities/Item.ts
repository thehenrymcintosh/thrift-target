import {UUID} from "@domain/values/UUID";

export type ItemId = UUID;

export enum ItemStatus {
    Unlisted = "Unlisted",
    Listed = "Listed",
    Sold = "Sold"
}

export type Item = {
    id: ItemId;
    name: string;
    firstListedAt: Date;
    priceInPence: number;
    status: ItemStatus;
}
