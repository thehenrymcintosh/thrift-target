import {readItemOfferHistory} from "@application/usecases/readItemOfferHistory";
import {ExtendedTestInMemoryOfferRepository} from "tests/testDoubles/extendedTestOfferRepository";
import {OfferBuilder} from "tests/builders/domain/OfferBuilder";
import {uuid} from "@domain/values/UUID";

describe('readItemOfferHistory', () => {
    const offerRepository = new ExtendedTestInMemoryOfferRepository();
    const dependencies = { offerRepository };

    beforeEach(async () => {
        await offerRepository.deleteAll();
    })
    it('should return an empty array if there are no offers', async () => {
        const offers = await readItemOfferHistory(dependencies, { itemId: "anything"})
        expect(offers).toEqual([]);
    })

    it('should return only the item offers for that item if they exist', async () => {
        const itemId = uuid();
        const offerOnItem = new OfferBuilder().withItemId(itemId).build();
        const irrelevantOffer = new OfferBuilder().build();
        await offerRepository.save(offerOnItem);
        await offerRepository.save(irrelevantOffer);
        const offers = await readItemOfferHistory(dependencies, { itemId })
        expect(offers).toEqual([offerOnItem]);
    })
})