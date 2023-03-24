
export const dateDaysAgo = (days: number, relativeTo: Date = new Date()) => {
    const startingFrom = new Date(relativeTo);
    return new Date(startingFrom.setDate( startingFrom.getDate() - days));
}
