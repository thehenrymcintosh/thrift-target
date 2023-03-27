import {OfferRepository} from "@application/ports/repositories/OfferRepository";
import {ItemId} from "@domain/entities/Item";
import {Offer} from "@domain/entities/Offer";

type Dependencies = {
    offerRepository: OfferRepository;
}

export type Params = {
    itemId: ItemId;
}
export const readItemOfferHistory = (dependencies: Dependencies, { itemId }: Params): Promise<Offer[]> => {
    return dependencies.offerRepository.allOffersForItem(itemId);
}