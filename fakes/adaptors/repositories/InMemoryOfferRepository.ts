import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {Offer} from "@domain/entities/Offer";
import {ItemId} from "@domain/entities/Item";

export class InMemoryOfferRepository implements OfferRepository {
    protected repo: Offer[] = [];
    async getByItemId(itemId: ItemId): Promise<Offer[]> {
        return this.repo.filter(offer => offer.itemId == itemId);
    }

    async save(offer: Offer): Promise<void> {
        this.repo.push(offer);
    }

}