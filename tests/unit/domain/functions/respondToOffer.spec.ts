import {ItemBuilder} from "tests/builders/domain/ItemBuilder";
import {OfferBuilder} from "tests/builders/domain/OfferBuilder";
import {OfferOutcome, respondToOffer} from "@domain/functions/respondToOffer";
import {dateDaysAgo} from "tests/builders/utils/dateHelpers";

describe('respondToOffer', () => {
   it.each`
   itemPrice | offerPrice
   ${5000} | ${5001}
   ${5000} | ${5000}
   ${5000} | ${10000}
   `('should accept an offer ($offerPrice) that is >= the listed price ($itemPrice)',
        ({ itemPrice, offerPrice}: { itemPrice: number, offerPrice: number}) => {
       const item = new ItemBuilder().withPriceInPence(itemPrice).build();
       const offer = new OfferBuilder().withOfferPriceInPence(offerPrice).build();
       const response = respondToOffer({ item, offer });
       expect(response.outcome).toBe(OfferOutcome.Accept);
   });

   describe('items that are up to 30 days old', () => {
      const youngItem = new ItemBuilder().withFirstListedAt(dateDaysAgo(30)).build();

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

    describe('items that are up to 90 days old', () => {
        const threeMonthItem = new ItemBuilder().withFirstListedAt(dateDaysAgo(90)).build();

        it('should accept offers up to 30% off',async () => {
            const offer = new OfferBuilder().withOfferPriceInPence(threeMonthItem.priceInPence * 0.7).build();
            const response = respondToOffer({ item: threeMonthItem, offer });
            expect(response.outcome).toBe(OfferOutcome.Accept);
        });

        it('should reject offers more than 30% off', async () => {
            const offer = new OfferBuilder().withOfferPriceInPence(threeMonthItem.priceInPence * 0.69).build();
            const response = respondToOffer({ item: threeMonthItem, offer });
            expect(response.outcome).toBe(OfferOutcome.Reject);
        })
    });

    describe('items that are more than 90 days old', () => {
        const oldItem = new ItemBuilder().withFirstListedAt(dateDaysAgo(91)).build();

        it('should accept offers up to 50% off',async () => {
            const offer = new OfferBuilder().withOfferPriceInPence(oldItem.priceInPence * 0.5).build();
            const response = respondToOffer({ item: oldItem, offer });
            expect(response.outcome).toBe(OfferOutcome.Accept);
        });

        it('should reject offers more than 50% off', async () => {
            const offer = new OfferBuilder().withOfferPriceInPence(oldItem.priceInPence * 0.49).build();
            const response = respondToOffer({ item: oldItem, offer });
            expect(response.outcome).toBe(OfferOutcome.Reject);
        })
    });
});
