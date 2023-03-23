import {ItemBuilder} from "tests/builders/domain/ItemBuilder";
import {OfferBuilder} from "tests/builders/domain/OfferBuilder";
import {OfferOutcome, respondToOffer} from "@domain/functions/respondToOffer";
import {daysAgo} from "tests/builders/utils/dateHelpers";

describe('respondToOffer', () => {
   it.each`
   itemPrice | offerPrice
   ${5000} | ${5001}
   ${5000} | ${5000}
   `('should accept an offer ($offerPrice) that is >= the listed price ($itemPrice)',
        ({ itemPrice, offerPrice}: { itemPrice: number, offerPrice: number}) => {
       const item = new ItemBuilder().withPriceInPence(itemPrice).build();
       const offer = new OfferBuilder().withOfferPriceInPence(offerPrice).build();
       const response = respondToOffer({ item, offer });
       expect(response.outcome).toBe(OfferOutcome.Accept);
   });

   describe('items that are less than a month old', () => {
      const youngItem = new ItemBuilder().withFirstListedAt(daysAgo(5)).build();

      it('should accept offers up to 10% off',async () => {
          const offer = new OfferBuilder().withOfferPriceInPence(youngItem.priceInPence * 0.9).build();
          const response = respondToOffer({ item: youngItem, offer });
          expect(response.outcome).toBe(OfferOutcome.Accept);
      });

      it('should reject offers more than 10% off', async () => {
          const offer = new OfferBuilder().withOfferPriceInPence(youngItem.priceInPence * 0.89).build();
          const response = respondToOffer({ item: youngItem, offer });
          expect(response.outcome).toBe(OfferOutcome.Reject);
      })

   });
});
