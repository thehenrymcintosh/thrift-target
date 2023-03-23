import { v4, validate } from "uuid";

export type UUID = string;
export const uuid = (): UUID => v4();

export const isUUID = (str: string): str is UUID => validate(str);
