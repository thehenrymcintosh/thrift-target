// a port is an interface to the outside world that can be a consumed by a usecase.

import {Offer} from "@domain/entities/Offer";
import {ItemId} from "@domain/entities/Item";
export interface OfferRepository {
    getByItemId(itemId: ItemId): Promise<Offer[]>;
    save(offer: Offer): Promise<void>;
}