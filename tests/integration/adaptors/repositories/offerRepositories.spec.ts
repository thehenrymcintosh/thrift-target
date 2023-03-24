import {
    ExtendedTestInMemoryOfferRepository,
    ExtendedTestOfferRepository
} from "tests/testDoubles/extendedTestOfferRepository";
import {OfferBuilder} from "tests/builders/domain/OfferBuilder";

describe.each`
    name | offerRepository
    ${"In memory"} | ${new ExtendedTestInMemoryOfferRepository()}
`("$name offer repository", ({offerRepository} : { offerRepository: ExtendedTestOfferRepository }) => {
    beforeEach(async () => {
        await offerRepository.deleteAll()
    });

    it('Can save offers', async () => {
        const offer = new OfferBuilder().build();
        await expect(offerRepository.save(offer)).resolves.toBeUndefined();
    });

    it('Can retrieve saved offers by itemId', async () => {
        const offer = new OfferBuilder().build();
        await offerRepository.save(offer);
        await expect(offerRepository.getByItemId(offer.itemId)).resolves.toEqual([offer]);
    })
})