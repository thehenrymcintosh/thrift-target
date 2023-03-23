import { Customer} from "@domain/entities/Customer";
import {uuid} from "@domain/values/UUID";

export class CustomerBuilder {
    private customer: Customer = {
        id: uuid(),
        name: "Anoni Mouse",
        email: `${uuid()}@gmail.com`
    }

    withId(id: string) {
        this.customer.id = id;
        return this;
    }

    withName(name: string) {
        this.customer.name = name;
        return this;
    }

    withEmail(email: string) {
        this.customer.email = email;
        return this;
    }

    build() {
        return this.customer;
    }
}
