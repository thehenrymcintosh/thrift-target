import {uuid} from "@domain/values/UUID";
import {intInRange, oneFrom} from "tests/builders/utils/builderHelpers";
import {Offer, OfferInitiator, OfferStatus} from "@domain/entities/Offer";
import {CustomerId} from "@domain/entities/Customer";
import {ItemId} from "@domain/entities/Item";

export class OfferBuilder {
    private offer: Offer = {
        id: uuid(),
        sentAt: new Date(),
        offerPriceInPence: intInRange(2_000, 4_000),
        customerId: "customer-uuid-goes-here",
        itemId: "item-uuid-goes-here",
        initiatedBy: oneFrom([ OfferInitiator.Buyer, OfferInitiator.Thrift]),
        status: oneFrom([OfferStatus.Accepted, OfferStatus.Rejected, OfferStatus.Sent]),
    }

    withId(id: string) {
        this.offer.id = id;
        return this;
    }

    withOfferPriceInPence(priceInPence: number) {
        this.offer.offerPriceInPence = priceInPence;
        return this;
    }

    withCustomerId(customerId: CustomerId) {
        this.offer.customerId = customerId;
        return this;
    }

    withItemId(itemId: ItemId) {
        this.offer.itemId = itemId;
        return this;
    }

    build(): Offer {
        return this.offer;
    }

}
