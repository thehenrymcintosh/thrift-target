import {UUID} from "@domain/values/UUID";

export type CustomerId = UUID;

export type Customer = {
    id: CustomerId;
    name: string;
    email: string;
}
