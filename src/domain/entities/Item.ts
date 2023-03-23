import {UUID} from "@domain/values/UUID";

export type ItemId = UUID;

export type Item = {
    id: ItemId;
    name: string;
    firstListedAt: Date;
    priceInPence: number;
}
