import {UUID} from "@domain/values/UUID";
import {CustomerId} from "@domain/entities/Customer";
import {ItemId} from "@domain/entities/Item";

export type OfferId = UUID;

export enum OfferInitiator {
    Thrift = "Thrift",
    Buyer = "Buyer"
}


export enum OfferStatus {
    Sent = "Sent",
    Accepted = "Accepted",
    Rejected = "Rejected"
}

export type Offer = {
    id: OfferId;
    customerId: CustomerId;
    sentAt: Date;
    itemId: ItemId;
    offerPriceInPence: number;
    status: OfferStatus;
    initiatedBy: OfferInitiator;
}
