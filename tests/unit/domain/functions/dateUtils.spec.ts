import {ageInDays} from "@domain/functions/dateUtils";

describe('getAgeInDays', () => {
    it('should correctly calculate age across months', () => {
        const date = new Date('2022-05-30');
        const relativeTo = new Date('2022-06-05');
        expect(ageInDays(date, relativeTo)).toEqual(6);
    });

    it('should correctly calculate age across years', () => {
        const date = new Date('2021-12-28');
        const relativeTo = new Date('2022-01-05');
        expect(ageInDays(date, relativeTo)).toEqual(8);
    });

    it('should return a negative number if in the future', () => {
        const date = new Date('2022-01-05');
        const relativeTo = new Date('2021-12-28');
        expect(ageInDays(date, relativeTo)).toEqual(-8);
    })
})
