import {OfferResponder} from "@application/ports/services/OfferResponder";

export class FakeOfferResponder implements OfferResponder {
    acceptOffer(): Promise<void> {
        return Promise.resolve();
    }

    rejectOffer(): Promise<void> {
        return Promise.resolve();
    }

}