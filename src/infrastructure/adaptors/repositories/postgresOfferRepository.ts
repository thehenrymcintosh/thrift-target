import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {Offer} from "@domain/entities/Offer";

export class PostgresOfferRepository implements OfferRepository {
    allOffersForItem(): Promise<Offer[]> {
        throw new Error('Not Implemented!')
    }

    save(): Promise<void> {
        throw new Error('Not Implemented!')
    }

}