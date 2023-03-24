
export interface OfferResponder {
    acceptOffer(offerReference: string): Promise<void>;
    rejectOffer(offerReference: string): Promise<void>;
}