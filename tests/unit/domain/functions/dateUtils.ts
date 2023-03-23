import {ageInDays} from "@domain/functions/dateUtils";

describe('getAgeInDays', () => {
    it('should correctly calculate age across months', () => {
        const startDate = new Date('2022-06-05');
        const endDate = new Date('2022-05-30');
        expect(ageInDays(st, startDate)).toEqual(endDate);
    });

    it('should correctly calculate age across years', () => {
        const startDate = new Date('2022-01-05');
        const endDate = new Date('2021-12-28');
        expect(daysAgo(8, startDate)).toEqual(endDate);
    });
})
