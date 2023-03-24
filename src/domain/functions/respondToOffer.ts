import {Offer} from "@domain/entities/Offer";
import {Item} from "@domain/entities/Item";
import {ageInDays} from "@domain/functions/dateUtils";

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

export const respondToOffer = ({offer, item}: Params): OfferResponse => {
    const itemAgeInDays = ageInDays(item.firstListedAt);
    const maxDiscount = maxDiscountForAge(itemAgeInDays);
    const minAcceptablePrice = item.priceInPence * (1-maxDiscount);
    if (offer.offerPriceInPence >= minAcceptablePrice) return { outcome: OfferOutcome.Accept }
    return { outcome: OfferOutcome.Reject }
}

const maxDiscountForAge = (itemAgeInDays: number) => {
    if (itemAgeInDays < 31) return 0.1;
    if (itemAgeInDays < 91) return 0.3;
    return 0.5;
}
