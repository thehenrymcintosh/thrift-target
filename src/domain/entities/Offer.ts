import {CustomerId} from "@domain/entities/Customer";
import {ItemId} from "@domain/entities/Item";

export type OfferReference = string;

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
    id: OfferReference;
    customerId: CustomerId;
    sentAt: Date;
    itemId: ItemId;
    offerPriceInPence: number;
    status: OfferStatus;
    initiatedBy: OfferInitiator;
}
