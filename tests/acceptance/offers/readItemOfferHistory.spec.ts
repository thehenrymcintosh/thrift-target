import {OfferBuilder} from "tests/builders/domain/OfferBuilder";
import {uuid} from "@domain/values/UUID";
import {ItemId} from "@domain/entities/Item";
import request from "supertest";
import {buildServer} from "@infrastructure/drivers/express/server";
import {adaptors} from "tests/testDoubles/acceptanceTestAdaptors";
import {reviveJson} from "tests/acceptance/utils/reviveJson";


const server = buildServer();
describe('readItemOfferHistory', () => {

    beforeEach(async () => {
        await adaptors.offerRepository.deleteAll();
    });

    const pathToOfferItems = (itemId: ItemId) => `/items/${itemId}/offers`;

    it('should return an empty array if there are no offers', async () => {
        const response = await request(server)
            .get(pathToOfferItems('non-existant'))
            .send()
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ offers: [] })
    })

    it('should return only the item offers for that item if they exist', async () => {
        const itemId = uuid();
        const offerOnItem = new OfferBuilder().withItemId(itemId).build();
        const irrelevantOffer = new OfferBuilder().build();
        await adaptors.offerRepository.save(offerOnItem);
        await adaptors.offerRepository.save(irrelevantOffer);
        const response = await request(server)
            .get(pathToOfferItems(itemId))
            .send()
        expect(response.status).toEqual(200);
        expect(reviveJson(response.body)).toEqual({ offers: [offerOnItem] })
    })
})