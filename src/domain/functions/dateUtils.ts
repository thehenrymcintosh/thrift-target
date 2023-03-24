
export const ageInDays = (date: Date, relativeTo: Date = new Date()) => {
    const diffMs = relativeTo.getTime() - date.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays
}
