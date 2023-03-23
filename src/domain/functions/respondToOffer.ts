import {Offer} from "@domain/entities/Offer";
import {Item} from "@domain/entities/Item";

export enum OfferOutcome {
    Accept = "Accept",
    Reject = "Reject"
}

type OfferResponse = {
    outcome: OfferOutcome
}

type Params = {
  offer: Offer,
  item: Item
};

const acceptableDiscounts = {
    firstMonth: 0.1
} as const;

export const respondToOffer = ({offer, item}: Params): OfferResponse => {
    if (offer.offerPriceInPence >= item.priceInPence) return { outcome: OfferOutcome.Accept };
    const itemAgeInDays =
    return { outcome: OfferOutcome.Accept }
}
