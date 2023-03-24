import {InboundOffer} from "@application/usecases/respondToOffers";
import {uuid} from "@domain/values/UUID";
import {intInRange} from "tests/builders/utils/builderHelpers";

export class InboundOfferBuilder {
    private inboundOffer: InboundOffer = {
        offerReference: uuid(),
        customerId: uuid(),
        itemId: uuid(),
        offerPriceInPence: intInRange(5_00, 100_00),
    }

    withOfferReference(offerReference: string) {
        this.inboundOffer.offerReference = offerReference;
        return this;
    }

    withCustomerId(customerId: string) {
        this.inboundOffer.customerId = customerId;
        return this;
    }

    withItemId(itemId: string) {
        this.inboundOffer.itemId = itemId;
        return this;
    }

    withOfferPriceInPence(pence: number) {
        this.inboundOffer.offerPriceInPence = pence;
        return this;
    }

    build() {
        return this.inboundOffer;
    }
}