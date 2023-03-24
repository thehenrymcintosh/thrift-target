import {Item, ItemStatus} from "@domain/entities/Item";
import {uuid} from "@domain/values/UUID";
import {intInRange, oneFrom} from "tests/builders/utils/builderHelpers";

export class ItemBuilder {
    private item: Item = {
        id: uuid(),
        firstListedAt: new Date(),
        name: "Cool hat",
        priceInPence: intInRange(5_00, 50_00),
        status: oneFrom(Object.values(ItemStatus))
    }

    withId(id: string) {
        this.item.id = id;
        return this;
    }

    withFirstListedAt(firstListedAt: Date) {
        this.item.firstListedAt = firstListedAt;
        return this;
    }

    withName(name: string) {
        this.item.name = name;
        return this;
    }

    withPriceInPence(priceInPence: number) {
        this.item.priceInPence = priceInPence;
        return this;
    }

    build(): Item {
        return this.item;
    }

}
