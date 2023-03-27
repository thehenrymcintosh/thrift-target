import {OfferResponder} from "@application/ports/services/OfferResponder";

export class Ebay implements OfferResponder {
    acceptOffer(): Promise<void> {
        throw new Error('Not Implemented!')
    }

    rejectOffer(): Promise<void> {
        throw new Error('Not Implemented!')
    }

}