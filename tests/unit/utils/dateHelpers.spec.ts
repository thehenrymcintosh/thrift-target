import {dateDaysAgo} from "tests/builders/utils/dateHelpers";

describe('daysAgo', () => {
    it('should correctly map dates across months', () => {
        const startDate = new Date('2022-06-05');
        const endDate = new Date('2022-05-30');
        expect(dateDaysAgo(6, startDate)).toEqual(endDate);
    });

    it('should correctly map dates across years', () => {
        const startDate = new Date('2022-01-05');
        const endDate = new Date('2021-12-28');
        expect(dateDaysAgo(8, startDate)).toEqual(endDate);
    });
})
