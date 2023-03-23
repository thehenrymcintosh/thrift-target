
export const oneFrom = <T>(options: T[]): T => {
    if (options.length === 0) throw new Error("Can't choose from an empty array!");
    const randomIndex = Math.floor( Math.random() * options.length );
    return options[randomIndex];
}

export const intInRange = (start: number, end: number): number => {
    const range = Math.abs(end - start);
    const randInRange = Math.random() * range;
    return Math.floor( randInRange + start );
}
