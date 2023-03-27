import {PostgresOfferRepository} from "@infrastructure/adaptors/repositories/postgresOfferRepository";
import {Ebay} from "@infrastructure/adaptors/services/ebay";
import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {OfferResponder} from "@application/ports/services/OfferResponder";

const offerRepository = new PostgresOfferRepository();
const offerResponder = new Ebay();

export interface Adaptors {
    offerRepository: OfferRepository,
    offerResponder: OfferResponder
}

export const adaptors: Adaptors = {
    offerRepository,
    offerResponder
}