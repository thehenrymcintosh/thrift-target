import {FakeOfferResponder} from "@fakes/adaptors/services/FakeOfferResponder";
import {respondToBuyerOffers} from "@application/usecases/respondToOffers";
import {InboundOfferBuilder} from "tests/builders/application/InboundOfferBuilder";
import {ExtendedTestInMemoryOfferRepository} from "tests/testDoubles/extendedTestOfferRepository";
describe("RespondToOffers", () => {
   const offerRepository = new ExtendedTestInMemoryOfferRepository();
   const offerResponder = new FakeOfferResponder();
   const dependencies = {
       offerRepository,
       offerResponder
   };

   // const acceptOfferSpy = jest.spyOn(offerResponder, 'acceptOffer');
   const rejectOfferSpy = jest.spyOn(offerResponder, 'rejectOffer');

   afterEach(async () => {
       await offerRepository.deleteAll();
   });


   xit("should resolve if not given any offers", async () => {
        const inboundOffers = [];
        await expect(respondToBuyerOffers(dependencies, {inboundOffers})).resolves.toBeUndefined();
   });

    xit("should reject offers for items that don't exist", async () => {
        const invalidInboundOffer = new InboundOfferBuilder().build()
        await expect(respondToBuyerOffers(dependencies, {inboundOffers: [invalidInboundOffer]})).resolves.toBeUndefined();
        expect(rejectOfferSpy).toHaveBeenCalledWith(invalidInboundOffer.offerReference);
    });

    // will need to add a port for the item repository & a fake before tackling these
    it.todo("should reject offers for items that are not listed");
    it.todo("should accept offers over asking price")
    describe.each`
        itemAgeInDays | acceptablePriceReduction | unacceptablePriceReduction
        ${5} | ${0.9} | ${0.89}
        ${30} | ${0.9} | ${0.89}
        ${31} | ${0.7} | ${0.69}        
        ${90} | ${0.7} | ${0.69}        
        ${91} | ${0.5} | ${0.49}        
    `('An item that is $daysOld days old',
            () => {
        it.todo("should accept offers the min acceptable price")
        it.todo("should reject offers below the min acceptable price")
    })
    it.todo("should only accept the best offer if there are multiple acceptable offers for an item")

});