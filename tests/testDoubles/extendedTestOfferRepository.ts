import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {InMemoryOfferRepository} from "@fakes/adaptors/repositories/InMemoryOfferRepository";

export type ExtendedTestOfferRepository = OfferRepository & {
    deleteAll(): Promise<void>;
}

export class ExtendedTestInMemoryOfferRepository extends InMemoryOfferRepository implements ExtendedTestOfferRepository {
    async deleteAll(): Promise<void> {
        this.repo = [];
    }
}