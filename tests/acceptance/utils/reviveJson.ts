export const reviveJson = <T extends Record<string, unknown>>(body: any):T => {
    const stringVersion = JSON.stringify(body);
    return JSON.parse(stringVersion, dateReviver) as T;
}

const regexIsoDate = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

const dateReviver = (_key: any, value: any): any => {
    if (typeof value == 'string' && (regexIsoDate.exec(value))) {
        return new Date(value);
    }
    return value;
}