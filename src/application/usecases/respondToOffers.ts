// usecases are all the things our app 'does' at a high level, e.g. respond to offers, update orders, apply credits
// they are passed only the dependencies that they need to run by the code that executes them, which may be tests or production infrastructure

import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {CustomerId} from "@domain/entities/Customer";
import {ItemId} from "@domain/entities/Item";
import {OfferResponder} from "@application/ports/services/OfferResponder";

type Dependencies = {
    offerRepository: OfferRepository;
    offerResponder: OfferResponder;
}

export type InboundOffer = {
    offerReference: string;
    customerId: CustomerId;
    itemId: ItemId;
    offerPriceInPence: number;
}

type Parameters = {
    inboundOffers: InboundOffer[],
}

export const respondToBuyerOffers = async (_dependencies: Dependencies, _parameters: Parameters) => {
    throw new Error('Not implemented!');
}